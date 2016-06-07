angular.module('openspire-editor', ['ngAnimate', 'ui.bootstrap']);

angular.module('openspire-editor').controller('navbarctrl', function ($scope)
{
    $scope.getLua = function ()
    {
        var i;

        console.log(widgets);

        var widgetNames = "";
        for (i = 0; i < widgets.length; i++)
        {
            widgetNames += widgets[i].name;
            if (i < widgets.length - 1)
            {
                widgetNames += ", ";
            }
        }

        var lua = "do\n";
        lua += "    local Input = etk.Widgets.Input\n";
        lua += "    local Label = etk.Widgets.Label\n";
        lua += "    local Button = etk.Widgets.Button\n";
        lua += "    local myView = etk.View()\n";
        lua += "    local " + widgetNames + "\n\n";

        for (i = 0; i < widgets.length; i++)
        {
            lua += widgets[i].generateLua() + "\n\n";
        }

        lua += "    myView:addChildren(" + widgetNames + ")\n";
        lua += "    etk.RootScreen:pushScreen(myView)\n";
        lua += "end\n";

        console.log(lua);
    }
});


angular.module('openspire-editor').controller('AccordionPanelsCtrl', function ($scope)
{
    $scope.alhorzd = 'left';
    $scope.alvertd = 'top';

    widget_callback = function (widgets)
    {
        $scope.widgets = widgets;
        $scope.$digest();
    };

    selectedWidget.watch('widget', function (prop, oldval, newval)
    {
        $scope.widget = newval;
        $scope.$digest();
    });


    function revertP(p, rel)
    {
        console.log(p);
        return {value: (p.unit != '%' ? rel : 100) - p.value}
    }

    $scope.updateval = function (id, side)
    {
        var widget = $scope.widget;
        var alignments = widget.alignments;

        addAlignment(widget, wtable[parseInt(id)], side);
        console.log(widget.alignments);

        moveWidgetWithDeps(widget, 0, 0);
        drawElementsBoundaries();
    };

    $scope.updatehal = function (id, side)
    {
        var widget = $scope.widget;
        var alignments = widget.alignments;

        addAlignment(widget, wtable[parseInt(id)], side);
        console.log(widget.alignments);

        moveWidgetWithDeps(widget, 0, 0);
        drawElementsBoundaries();
    };


    $scope.togglePositionAlignment = function (al)
    {
        var parent = $scope.widget.parent;
        var el = $scope.widget.el;
        var position = $scope.widget.position;

        var bp = getElementBoundaries(parent.el);
        var b = getElementBoundaries(el);

        if (al == 'top' && !position.top)
        {
            position.top = revertP(position.bottom, bp.h - b.h);
            position.bottom = null;
        } else if (al == 'bottom' && !position.bottom)
        {
            position.bottom = revertP(position.top, bp.h - b.h);
            position.top = null;
        } else if (al == 'left' && !position.left)
        {
            position.left = revertP(position.right, bp.w - b.w);
            position.right = null;
        } else if (al == 'right' && !position.right)
        {
            position.right = revertP(position.left, bp.w - b.w);
            position.left = null;
        }

        drawElementsBoundaries();
    };

    $scope.groups = [
        {
            title: '[class] properties',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: '[parent class] properties',
            content: 'Dynamic Group Body - 2'
        },
        {
            title: '[parentparent class] properties',
            content: 'Dynamic Group Body - 2'
        }
    ];
});

angular.module('openspire-editor').controller('DeviceSelectorButtonsCtrl', function ($scope)
{
    $scope.radioModel = 'iPad';
    $scope.toggleMode = function ()
    {
        if ($scope.radioModel == 'Handheld')
        {
            setEditorSize(320, 240, 1.5);
            repositionWidgets();
            drawElementsBoundaries();
            console.log('Handheld clicked');
        }
        else if ($scope.radioModel == 'iPad')
        {
            setEditorSize(640, 480);
            repositionWidgets();
            drawElementsBoundaries();
            console.log('iPad clicked');
        }
        else if ($scope.radioModel == 'Computer')
        {
            setEditorSize(1024, 1024);
            repositionWidgets();
            drawElementsBoundaries();
            console.log('Computer clicked');
        }
    }
});
