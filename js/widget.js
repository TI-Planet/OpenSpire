class Widget {
    constructor(id, name, type, el, parent, alignments, position) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.el = el;
        this.parent = parent /* || rootWidget */;
        this.alignments = alignments || [];
        this.position = position || {
                top: {
                    value: 0,
                    unit: "px"
                },
                left: {
                    value: 0,
                    unit: "px"
                }
            };
    }

    generateLua() {
        let alignments = "";
        for (let j = 0; j < this.alignments.length; j++) {
            alignments += `{ref=${this.alignments[j].target.name}, side=Position.Sides.${this.alignments[j].side}}, `;
        }

        const thispos = this.position;
        let positions = "";
        ['top', 'bottom', 'right', 'left'].forEach(pos => {
            positions += thispos[pos] ? (`${pos}='${thispos[pos].value}${thispos[pos].unit ? thispos[pos].unit : ""}', `) : ""
        });

        return `\tlocal ${this.name} = ${this.type.capitalizeFirstLetter()} { \n\t\tposition = Position { ${positions} },\n\t\talignment = { ${alignments} }\n\t}`;
    }

    getWidgetAlignment() {
        const alignments = this.alignments;
        const rel = {};

        let alignment;
        for (alignment of alignments) {
            const r = getAlignment(alignment);
            rel.x = r.x || rel.x;
            rel.y = r.y || rel.y;
        }

        return rel;
    }

    setPosition(x, y) {
        const el = this.el;
        const parent = this.parent;
        const b = getElementBoundaries(el);
        const pb = getElementBoundaries(parent.el);
        const rel = this.getWidgetAlignment();

        const position = this.position;
        const p_x_val = x / pb.w * 100;
        const p_y_val = y / pb.h * 100;

        let vert = position.bottom || position.top;
        if (!vert)
        {
            vert = position.top = {
                value: 0,
                unit: "px"
            };
        }
        vert.value = (vert.unit == "%") ? p_y_val : y;


        let horz = position.right || position.left;
        if (!horz)
        {
            horz = position.left = {
                value: 0,
                unit: "px"
            };
        }
        horz.value = (horz.unit == "%") ? p_x_val : x;

        if (position.right)
        {
            horz.value = (horz.unit == "%" ? 100 : pb.w) - horz.value - b.w;
        }

        if (position.bottom)
        {
            vert.value = (vert.unit == "%" ? 100 : pb.h) - vert.value - b.h;
        }

        if (rel.x)
        {
            horz.value -= position.right ? pb.w - rel.x : rel.x
        }

        if (rel.y)
        {
            vert.value -= position.bottom ? pb.h - rel.y : rel.y
        }
    }

    moveDelta(dx, dy) {
        const el = this.el;
        const b = getElementBoundaries(el);
        const x = b.x + dx;
        const y = b.y + dy;

        el.style.webkitTransform = el.style.transform = `translate(${x}px, ${y}px)`;
        el.setAttribute('data-x', x);
        el.setAttribute('data-y', y);

        this.setPosition(x, y);
    }

    drawWidgetBoundaries(ctx, w, h) {
        const el = this.el;
        const pos = this.position;
        const b = getElementBoundaries(el);
        const rel = this.getWidgetAlignment();

        ctx.fillStyle = "rgba(0, 255, 0, 0.1)";

        ctx.fillRect(b.x, 0, 2, h);
        ctx.fillRect(b.x + b.w, 0, 2, h);
        ctx.fillRect(0, b.y, w, 2);
        ctx.fillRect(0, b.y + b.h, w, 2);

        ctx.strokeStyle = "rgba(0, 0, 255, 0.2)";

        const left = b.x;
        const right = left + b.w;
        const top = b.y;
        const bottom = top + b.h;
        const middle = top + b.h / 2;
        const center = left + b.w / 2;

        let arrow;
        let to;

        to = {
            x: rel.x || center,
            y: middle
        };

        if (pos.left && rel.x)
        {
            arrow = {
                from: {
                    x: left,
                    y: middle
                },
                to
            };
        } else if (pos.right && rel.x)
        {
            arrow = {
                from: {
                    x: right,
                    y: middle
                },
                to
            };
        } else if (pos.left)
        {
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
        } else if (pos.right)
        {
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

        if (pos.top && rel.y)
        {
            arrow = {
                from: {
                    x: center,
                    y: top
                },
                to
            };
        } else if (pos.bottom && rel.y)
        {
            arrow = {
                from: {
                    x: center,
                    y: bottom
                },
                to
            };
        } else if (pos.top)
        {
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
        } else if (pos.bottom)
        {
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
}

// helper
function getAlignment(alignment)
{
    const res = {};

    if (alignment)
    {
        const b = getElementBoundaries(alignment.target.el);

        switch (alignment.side)
        {
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

