var selectedWidget = {};

function selectWidget(el)
{
    selectedWidget.widget = el.widget;
}

var widgets = [];
var wtable = [];
var dependencies = {};
var id_cnt = 0;
var widget_callback = function () {};

var c = document.getElementById("canvas");
var context = c.getContext("2d");

var pixel_scale = 1;

var container = document.getElementById('container');
container.setAttribute('data-x', 0);
container.setAttribute('data-y', 0);

var screen = document.getElementById('screen');


function setEditorSize(w, h, scale)
{
    scale = scale || 1;
    $container = $(container);
    $canvas = $(c);
    $screen = $(screen);

    $container.height(h);
    $container.width(w);

    canvas.height = h;
    canvas.width = w;

    var ws = 0;//w - w/scale;
    var hs = 0;//h - h/scale;

    $screen.css({
        '-webkit-transform': 'scale(' + scale + ')',
        '-moz-transform': 'scale(' + scale + ')',
        '-ms-transform': 'scale(' + scale + ')',
        '-o-transform': 'scale(' + scale + ')',
        'transform': 'scale(' + scale + ')'
    });

    pixel_scale = scale;
}

var rootWidget = new Widget(null, "_RootWidget_", null, container);

function addTemplate(el)
{
    el.widget = new Widget(null, null, null, el, rootWidget);
}

function duplicate(el)
{
    var clone = el.cloneNode(true);
    clone.setAttribute('clone', "yup");
    addTemplate(clone);

    el.style.position = "absolute";
    el.style.zIndex = 1000;
    el.parentNode.appendChild(clone);
    el.onmousedown = "";
}

function addWidget(el, x, y, parent)
{
    var container = document.getElementById('container');
    var name = el.getAttribute('data-name');
    var type = el.getAttribute('data-type');

    //initial styling to have no 'impact' in container
    el.style.position = "asbsolute";
    el.style.top = "0px";
    el.style.left = "0px";

    container.appendChild(el);

    el.style.webkitTransform = el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    el.setAttribute('data-x', x);
    el.setAttribute('data-y', y);
    el.style.zIndex = 0;

    id_cnt++;
    var w = new Widget(id_cnt, name + id_cnt, type, el, parent);

    wtable[w.id] = w;

    w.setPosition(x, y);
    el.widget = w;

    widgets.push(w);

    drawElementsBoundaries();
    widget_callback(widgets);

    return w;
}

function moveWidgetWithDeps(widget, dx, dy)
{
    widget.moveDelta(dx, dy);

    var my_dependencies = dependencies[widget.id];
    if (my_dependencies)
    {
        for (var i = 0; i < my_dependencies.length; i++)
        {
            var dep = my_dependencies[i];
            updateWidgetAlignmentWithDeps(dep, widget, dx, dy);
        }
    }
}

function updateWidgetAlignmentWithDeps(source, target, dx, dy)
{
    var b = getElementBoundaries(source.el);
    var alignments = source.alignments;

    for (var i = 0; i < alignments.length; i++)
    {
        var alignment = alignments[i];
        if (alignment && alignment.target == target)
        {
            var side = alignment.side;
            if (side == 'left' || side == 'right')
            {
                moveWidgetWithDeps(source, dx, 0);
            } else if (side == 'top' || side == 'bottom')
            {
                moveWidgetWithDeps(source, 0, dy);
            }
        }
    }
}

function repositionWidgets()
{
    var i;
    var toPositionHorz = [];
    var positionedHorz = {};

    var toPositionVert = [];
    var positionedVert = {};

    for (i = 0; i < widgets.length; i++)
    {
        var widget = widgets[i];
        widget.moveTo = {};
        toPositionHorz[i] = widget;
        toPositionVert[i] = widget;
    }

    i = 0;
    while (toPositionHorz.length > 0)
    {
        var widget = toPositionHorz[i];
        var bp = getElementBoundaries(widget.parent.el);
        var b = getElementBoundaries(widget.el);
        var hal = widget.alignments[0]; // 0 is horz index
        var pos = widget.position;
        var canMove = !hal;

        var alLeft = 0;
        var alRight = bp.w;

        if (hal && positionedHorz[hal.target.id])
        {
            var al = getAlignment(hal);
            alLeft = alRight = al.x;
            canMove = true;
        }

        if (canMove)
        {
            console.log('moving ', widget.name);
            var left = widget.position.left;
            var right = widget.position.right;
            var isPx = (left ? left.unit : right.unit) != '%';
            var val = (left ? left.value : right.value) * (isPx ? 1 : bp.w / 100);

            widget.moveTo.x = left ? alLeft + val : alRight - val - b.w;
            positionedHorz[widget.id] = true;
            toPositionHorz.splice(i, 1);
        }

        i++;

        if (i >= toPositionHorz.length)
        {
            i = 0;
        }
    }


    i = 0;
    while (toPositionVert.length > 0)
    {
        var widget = toPositionVert[i];
        var bp = getElementBoundaries(widget.parent.el);
        var b = getElementBoundaries(widget.el);
        var hal = widget.alignments[1]; // 1 is vert index
        var pos = widget.position;
        var canMove = !hal;

        var alTop = 0;
        var alBottom = bp.h;

        if (hal && positionedVert[hal.target.id])
        {
            var al = getAlignment(hal);
            alTop = alBottom = al.y;
            canMove = true;
        }

        if (canMove)
        {
            console.log('moving ', widget.name);
            var top = widget.position.top;
            var bottom = widget.position.bottom;
            var isPx = (top ? top.unit : bottom.unit) != '%';
            var val = (top ? top.value : bottom.value) * (isPx ? 1 : bp.h / 100);

            widget.moveTo.y = top ? alTop + val : alBottom - val - b.h;
            positionedVert[widget.id] = true;
            toPositionVert.splice(i, 1);
        }

        i++;

        if (i >= toPositionVert.length)
        {
            i = 0;
        }
    }

    for (i = 0; i < widgets.length; i++)
    {
        var widget = widgets[i];
        var x = widget.moveTo.x;
        var y = widget.moveTo.y;
        var el = widget.el;

        el.style.webkitTransform = el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        el.setAttribute('data-x', x);
        el.setAttribute('data-y', y);
    }
}

function getSideIndex(side)
{
    return (side == "left" || side == "right") ? 0 : 1;
}

function addAlignment(source, target, side)
{
    var s_i = widgets.indexOf(source);
    var t_i = widgets.indexOf(target);

    if (s_i != -1 && t_i != -1)
    {
        var s_widget = widgets[s_i];
        var t_widget = widgets[t_i];

        s_widget.alignments[getSideIndex(side)] = {
            target: t_widget,
            side: side
        };

        if (dependencies[t_widget.id])
        {
            if (dependencies[t_widget.id].indexOf(s_widget) == -1)
            {
                dependencies[t_widget.id].push(s_widget);
            }
        }
        else
        {
            dependencies[t_widget.id] = [s_widget];
            console.log('replaceing dep');
        }
    }
}

function getElementBoundaries(el)
{
    var $el = $(el);
    return {
        x: (parseFloat(el.getAttribute('data-x')) || 0),
        y: (parseFloat(el.getAttribute('data-y')) || 0),
        w: (parseFloat($el.outerWidth()) || 0),
        h: (parseFloat($el.outerHeight()) || 0)
    };
}

function canvas_arrow(context, fromx, fromy, tox, toy)
{
    context.beginPath();
    var headlen = 6;
    var angle = Math.atan2(toy - fromy, tox - fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}

function drawElementsBoundaries()
{
    var b = getElementBoundaries(container);

    var width = b.w;//c.width;
    var height = b.h;//c.height;

    context.clearRect(0, 0, width, height);

    for (var i = 0; i < widgets.length; i++)
    {
        widgets[i].drawWidgetBoundaries(context, width, height);
    }
}

drawElementsBoundaries();


// target elements with the "draggable" class
interact('.elem')
    .draggable({
        // enable inertial throwing
        inertia: false,

        // keep the element within the area of it's parent
        restrict: {
            restriction: function (x, y, element)
            {
                console.log(element.parentElement, container)
                if (element.parentElement == container)
                {
                    return container;
                }

            },
            endOnly: true,
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },

        // snapping
        snap: {
            targets: [
                interact.createSnapGrid({
                    x: 5,
                    y: 5
                })
            ],
            range: Infinity,
            relativePoints: [{
                x: 0,
                y: 0
            }]
        },

        // call this function on every dragmove event
        onmove: function (event)
        {
            $('.block').addClass('dragging');
            return dragMoveListener(event);
        },
        // call this function on every dragend event
        onend: function (event)
        {
            $('.block').removeClass('dragging');
        }
    });


interact(container).dropzone({
    accept: '.pre-elem',
    ondrop: function (event)
    {
        var target = event.relatedTarget;
        $target = $(target);
        $container = $(container);

        var t_offset = $target.offset();
        var c_offset = $container.offset();

        var x = t_offset.left - c_offset.left;
        var y = t_offset.top - c_offset.top;

        addWidget(target, x, y, rootWidget);

        $target.removeClass('pre-elem');

        drawElementsBoundaries();
    }
});

function dragMoveListener(event)
{
    var target = event.target;


    if (!target.widget)
    {
        addTemplate(target);
    }

    moveWidgetWithDeps(target.widget, event.dx / pixel_scale, event.dy / pixel_scale);

    drawElementsBoundaries();
}

window.dragMoveListener = dragMoveListener;

$(function ()
{
    drawElementsBoundaries();
});
