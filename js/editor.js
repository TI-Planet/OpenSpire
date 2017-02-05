const selectedWidget = {};

function selectWidget(el)
{
    selectedWidget.widget = el.widget;
}

const widgets = [];
const wtable = [];
const dependencies = {};
let id_cnt = 0;
let widget_callback = () => {};

const c = document.getElementById("canvas");
const context = c.getContext("2d");

let pixel_scale = 1;

const container = document.getElementById('container');
container.setAttribute('data-x', 0);
container.setAttribute('data-y', 0);

const screen = document.getElementById('screen');


function setEditorSize(w, h, scale=1) {
    $container = $(container);
    $canvas = $(c);
    $screen = $(screen);

    $container.height(h);
    $container.width(w);

    canvas.height = h;
    canvas.width = w;

    const ws = 0;//w - w/scale;
    const hs = 0;//h - h/scale;

    $screen.css({
        '-webkit-transform': `scale(${scale})`,
        '-moz-transform': `scale(${scale})`,
        '-ms-transform': `scale(${scale})`,
        '-o-transform': `scale(${scale})`,
        'transform': `scale(${scale})`
    });

    pixel_scale = scale;
}

const rootWidget = new Widget(null, "_RootWidget_", null, container);

function addTemplate(el)
{
    el.widget = new Widget(null, null, null, el, rootWidget);
    el.alhorzd = 'left';
    el.alvertd = 'top';
}

function duplicate(el)
{
    const clone = el.cloneNode(true);
    clone.setAttribute('clone', "yup");
    addTemplate(clone);

    el.style.position = "absolute";
    el.style.zIndex = 1000;
    el.parentNode.appendChild(clone);
    el.onmousedown = "";
}

function addWidget(el, x, y, parent)
{
    const name = el.getAttribute('data-name');
    const type = el.getAttribute('data-type');

    //initial styling to have no 'impact' in container
    el.style.position = "asbsolute";
    el.style.top = "0px";
    el.style.left = "0px";

    container.appendChild(el);

    el.style.webkitTransform = el.style.transform = `translate(${x}px, ${y}px)`;
    el.setAttribute('data-x', x);
    el.setAttribute('data-y', y);
    el.style.zIndex = 0;

    id_cnt++;
    const w = new Widget(id_cnt, name + id_cnt, type, el, parent);

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

    const my_dependencies = dependencies[widget.id];
    if (my_dependencies)
    {
        let dep;
        for (dep of my_dependencies) {
            updateWidgetAlignmentWithDeps(dep, widget, dx, dy);
        }
    }
}

function updateWidgetAlignmentWithDeps(source, target, dx, dy)
{
    const b = getElementBoundaries(source.el);
    const alignments = source.alignments;

    let alignment;
    for (alignment of alignments) {
        if (alignment && alignment.target == target)
        {
            const side = alignment.side;
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
    let i;
    const toPositionHorz = [];
    const positionedHorz = {};

    const toPositionVert = [];
    const positionedVert = {};

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

        let alLeft = 0;
        let alRight = bp.w;

        if (hal && positionedHorz[hal.target.id])
        {
            var al = getAlignment(hal);
            alLeft = alRight = al.x;
            canMove = true;
        }

        if (canMove)
        {
            console.log('moving ', widget.name);
            const left = widget.position.left;
            const right = widget.position.right;
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

        let alTop = 0;
        let alBottom = bp.h;

        if (hal && positionedVert[hal.target.id])
        {
            var al = getAlignment(hal);
            alTop = alBottom = al.y;
            canMove = true;
        }

        if (canMove)
        {
            console.log('moving ', widget.name);
            const top = widget.position.top;
            const bottom = widget.position.bottom;
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
        const x = widget.moveTo.x;
        const y = widget.moveTo.y;
        const el = widget.el;

        el.style.webkitTransform = el.style.transform = `translate(${x}px, ${y}px)`;
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
    if (widgets.includes(source) && widgets.includes(target) && typeof side != "undefined")
    {
		console.log("Add alignment", source, target, side);
		
        source.alignments[getSideIndex(side)] = {
            target: target,
            side: side
        };

        if (dependencies[target.id])
        {
			if (!dependencies[target.id].includes(source))
				dependencies[target.id].push(source);
        }
        else
        {
            dependencies[target.id] = [source];
            console.log('First dependency added');
        }
    }
}

function getElementBoundaries(el)
{
    const $el = $(el);
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
    const headlen = 6;
    const angle = Math.atan2(toy - fromy, tox - fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}

function drawElementsBoundaries()
{
    const b = getElementBoundaries(container);

    const width = b.w;//c.width;
    const height = b.h;//c.height;

    context.clearRect(0, 0, width, height);

    for (let i = 0; i < widgets.length; i++)
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
            restriction(x, y, element) {
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
        onmove(event) {
            $('.block').addClass('dragging');
            return dragMoveListener(event);
        },
        // call this function on every dragend event
        onend(event) {
            $('.block').removeClass('dragging');
        }
    });


interact(container).dropzone({
    accept: '.pre-elem',
    ondrop(event) {
        const target = event.relatedTarget;
        $target = $(target);
        $container = $(container);

        const t_offset = $target.offset();
        const c_offset = $container.offset();

        const x = t_offset.left - c_offset.left;
        const y = t_offset.top - c_offset.top;

        addWidget(target, x, y, rootWidget);

        $target.removeClass('pre-elem');
        
        drawElementsBoundaries();
        selectWidget(target);
    }
});

function dragMoveListener(event)
{
    const target = event.target;


    if (!target.widget)
    {
        addTemplate(target);
    }

    moveWidgetWithDeps(target.widget, event.dx / pixel_scale, event.dy / pixel_scale);

    drawElementsBoundaries();
}

window.dragMoveListener = dragMoveListener;

$(() => { drawElementsBoundaries(); });

