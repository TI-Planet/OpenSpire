var selectedWidget = {};

function selectWidget(el) {
	selectedWidget.widget = el.widget;
}

var widgets = [];
var wtable = [];
var dependencies = {};
var id_cnt = 0;
var widget_callback = function(){};

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var container = document.getElementById('container');
container.setAttribute('data-x', 0);
container.setAttribute('data-y', 0);

var rootWidget = {
	el: container,
	alignments: [],
	position: {
		top: {
			value: 0,
			unit: "px"
		},
		left: {
			value: 0,
			unit: "px"
		}
	}
}

function addTemplate(el) {
	el.widget = {
		el: el,
		alignments: [],
		parent: rootWidget,
		position: {
			top: {
				value: 0,
				unit: "px"
			},
			left: {
				value: 0,
				unit: "px"
			}
		}
	}
}

function duplicate(el) {
	var clone = el.cloneNode(true);
	clone.setAttribute('clone',"yup");
	addTemplate(clone);
	
	el.style.position = "absolute";
	el.style.zIndex = 1000;
	el.parentNode.appendChild(clone);
	el.onmousedown="";
}

//var w_btn1 = addWidget(btn1, 100, 100, rootWidget);
//var w_btn2 = addWidget(btn2, 200, 100, rootWidget);
//var w_inp1 = addWidget(inp1, 300, 100, rootWidget);
/*
addAlignment(w_btn1, w_btn2, 'left');
addAlignment(w_btn2, w_inp1, 'left');
addAlignment(w_btn2, w_inp1, 'bottom');*/



function addWidget(el, x, y, parent) {
	var container = document.getElementById('container');
	var name = el.getAttribute('data-name');
	var type = el.getAttribute('data-type');
	
	//initial styling to have no 'impact' in container
	el.style.position = "asbsolute";
	el.style.top = "0px";
	el.style.left = "0px";

	container.appendChild(el);

	el.style.webkitTransform =
		el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	el.setAttribute('data-x', x);
	el.setAttribute('data-y', y);
	el.style.zIndex = 0;

	var w = {
		id: id_cnt++,
		name: name + id_cnt,
		type: type,
		el: el,
		alignments: [],
		position: {},
		parent: parent
	};
	
	wtable[w.id] = w;

	setPositionValue(w, x, y);
	el.widget = w;

	widgets.push(w);
	
	drawElementsBoundaries();
	widget_callback(widgets);

	return w;
}

function moveWidget(widget, dx, dy) {
	var el = widget.el;
	var b = getElementBoundaries(el);
	var x = b.x + dx;
	var y = b.y + dy;

	el.style.webkitTransform =
		el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	el.setAttribute('data-x', x);
	el.setAttribute('data-y', y);

	setPositionValue(widget, x, y);

	var my_dependencies = dependencies[widget.id];

	if (my_dependencies) {
		for (var i = 0; i < my_dependencies.length; i++) {
			var dep = my_dependencies[i];
			updateWidgetAlignment(dep, widget, dx, dy);
		}
	}
}

function updateWidgetAlignment(source, target, dx, dy) {
	var b = getElementBoundaries(source.el);
	var alignments = source.alignments;

	for (var i = 0; i < alignments.length; i++) {
		var alignment = alignments[i];
		if (alignment.target == target) {
			var side = alignment.side;
			if (side == 'left' || side == 'right')
				moveWidget(source, dx, 0);
			else if (side == 'top' || side == 'bottom')
				moveWidget(source, 0, dy);
		}
	}
}

function setPositionValue(widget, x, y) {
	var el = widget.el;
	var parent = widget.parent;
	var b = getElementBoundaries(el);
	var pb = getElementBoundaries(parent.el);
	var rel = getWidgetAlignment(widget);

	var position = widget.position;
	var p_x_val = x / pb.w * 100;
	var p_y_val = y / pb.h * 100;

	var vert = position.bottom || position.top;
	if (!vert) vert = position.top = {
		value: 0,
		unit: "px"
	};
	vert.value = (vert.unit == "%") ? p_y_val : y;
	

	var horz = position.right || position.left;
	if (!horz) horz = position.left = {
		value: 0,
		unit: "px"
	};
	horz.value = (horz.unit == "%") ? p_x_val : x;
	
	if (position.right)
		horz.value = (horz.unit == "%" ? 100 : pb.w) - horz.value - b.w;
		
	if (position.bottom)
		vert.value = (vert.unit == "%" ? 100 :pb.h) - vert.value - b.h;
		
	if (rel.x)
		horz.value -= position.right ? pb.w - rel.x : rel.x
		
	if (rel.y)
		vert.value -= position.bottom ? pb.h - rel.y : rel.y
}

function getSideIndex(side) {
	return (side == "left" || side == "right") ? 0 : 1;
}

function addAlignment(source, target, side) {
	var s_i = widgets.indexOf(source);
	var t_i = widgets.indexOf(target);

	if (s_i != -1 && t_i != -1) {
		var s_widget = widgets[s_i];
		var t_widget = widgets[t_i];

		s_widget.alignments[getSideIndex(side)] = {
			target: t_widget,
			side: side
		};

		if (dependencies[t_widget.id] && dependencies[t_widget.id].indexOf(s_widget) == -1)
			dependencies[t_widget.id].push(s_widget);
		else
			dependencies[t_widget.id] = [s_widget];
	}
}



function getAlignment(alignment) {
	var res = {}
	
	if (alignment) {
		
		var b = getElementBoundaries(alignment.target.el);

		switch (alignment.side) {
			case 'left':
				res.x = b.x;
				break;
			case 'right':
				res.x = b.x + b.w;
				break;
			case 'top':
				res.y = b.y;
				break;
			case 'bottom':
				res.y = b.y + b.h;
				break;
		}
	}

	return res;
}

function getWidgetAlignment(widget) {
	var alignments = widget.alignments;
	var rel = {}

	for (var i = 0; i < alignments.length; i++) {
		var alignment = alignments[i];
		var r = getAlignment(alignment);
		rel.x = r.x || rel.x;
		rel.y = r.y || rel.y;
	}

	return rel;
}

function getElementBoundaries(el) {
	var $el = $(el);

	var x = (parseFloat(el.getAttribute('data-x')) || 0);
	var y = (parseFloat(el.getAttribute('data-y')) || 0);
	var w = (parseFloat($el.outerWidth()) || 0);
	var h = (parseFloat($el.outerHeight()) || 0);

	return {
		x: x,
		y: y,
		w: w,
		h: h
	};
}

function canvas_arrow(context, fromx, fromy, tox, toy) {
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

function drawWidgetBoundaries(widget, w, h) {
	var el = widget.el;
	var pos = widget.position;
	var b = getElementBoundaries(el);
	var rel = getWidgetAlignment(widget);


	ctx.fillStyle = "rgba(0, 255, 0, 0.1)";

	ctx.fillRect(b.x, 0, 2, h);
	ctx.fillRect(b.x + b.w, 0, 2, h);
	ctx.fillRect(0, b.y, w, 2);
	ctx.fillRect(0, b.y + b.h, w, 2);

	ctx.strokeStyle = "rgba(0, 0, 255, 0.2)";

	var left = b.x;
	var right = left + b.w;
	var top = b.y;
	var bottom = top + b.h;
	var middle = top + b.h / 2;
	var center = left + b.w / 2;

	var arrow;
	var to;

	to = {
		x: rel.x || center,
		y: middle
	};
	
	if (pos.left && rel.x) {
		arrow = {
			from: {
				x: left,
				y: middle
			},
			to: to
		};
	} else if (pos.right && rel.x) {
		arrow = {
			from: {
				x: right,
				y: middle
			},
			to: to
		};
	} else if (pos.left) {
		arrow = {
			from: {
				x: left,
				y: middle
			},
			to: {
				x: 0,
				y: middle
			}
		};
	} else if (pos.right) {
		arrow = {
			from: {
				x: right,
				y: middle
			},
			to: {
				x: w,
				y: middle
			}
		};
	}

	canvas_arrow(ctx, arrow.from.x, arrow.from.y, arrow.to.x, arrow.to.y);

	to = {
		x: center,
		y: rel.y || middle
	};

	if (pos.top && rel.y) {
		arrow = {
			from: {
				x: center,
				y: top
			},
			to: to
		};
	} else if (pos.bottom && rel.y) {
		arrow = {
			from: {
				x: center,
				y: bottom
			},
			to: to
		};
	} else if (pos.top) {
		arrow = {
			from: {
				x: center,
				y: top
			},
			to: {
				x: center,
				y: 0
			}
		};
	} else if (pos.bottom) {
		arrow = {
			from: {
				x: center,
				y: bottom
			},
			to: {
				x: center,
				y: h
			}
		};
	}

	canvas_arrow(ctx, arrow.from.x, arrow.from.y, arrow.to.x, arrow.to.y);
}

function drawElementsBoundaries() {
	var width = c.width;
	var height = c.height;

	ctx.clearRect(0, 0, width, height);

	for (var i = 0; i < widgets.length; i++) {
		drawWidgetBoundaries(widgets[i], width, height);
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
			restriction: function(x, y, element) {
				console.log(element.parentElement, container)
				if (element.parentElement == container)
					return container;

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
		onmove: function(event) {
			$('.block').addClass('dragging');
			return dragMoveListener(event);
		},
		// call this function on every dragend event
		onend: function(event) {
			$('.block').removeClass('dragging');
		}
	});


interact(container).dropzone({
	accept: '.pre-elem',
	ondrop: function(event) {
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

function dragMoveListener(event) {
	var target = event.target;
	
	if (!target.widget)
		addTemplate(target);
	
	var widget = target.widget;	
	moveWidget(widget, event.dx, event.dy);

	drawElementsBoundaries();
}

window.dragMoveListener = dragMoveListener;

$(function(){
	drawElementsBoundaries();
});
