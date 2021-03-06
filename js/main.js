angular.module('openspire-editor', ['ngAnimate', 'ui.bootstrap']);

angular.module('openspire-editor').controller('navbarctrl', $scope => {
    $scope.getLua = (returnOnly) => {
        const widgetNames = widgets.map(i=>i.name).join();

        let lua = `do
    local Input  = etk.Widgets.Input
    local Label  = etk.Widgets.Label
    local Button = etk.Widgets.Button

    local myView = etk.View()

`;
        if (widgets.length)
        {
            lua += `\n    local ${widgetNames}\n`;
            lua += widgets.map(w => w.generateLuaDefinition()).join('\n');
            lua += "\n";
            lua += widgets.map(w => w.generateLuaDependencies()).join('\n');
            lua += "\n";
            lua += `
    myView:addChildren(${widgetNames})
`;
        }
        lua += "\n    etk.RootScreen:pushScreen(myView)\nend";

        if (!returnOnly)
        {
            const modal = $("#luaCodeModal");
            const luaForHTML = $('<div/>').text(lua).html();
            modal.find("div.modal-body").html(`<pre style='max-height:300px'><code>${luaForHTML}</code></pre>`);
            modal.modal();
        }

        // todo : prepend by ETK full code.
        // lua = etkCode + lua;

        return etk_lua_code + lua;
    };

    $scope.getTNS = () =>
    {
        makeAndDownloadTNS($scope.getLua(true));
    }
});

angular.module('openspire-editor').controller('AccordionPanelsCtrl', $scope => {
    $scope.alhorzd = 'left';
    $scope.alvertd = 'top';

    widget_callback = widgets => {
        $scope.widgets = widgets;
        $scope.$digest();
    };

    selectedWidget.watch('widget', (prop, oldval, newval) => {
        $scope.widget = newval;
        $scope.$digest();
    });


    function revertP(p, rel)
    {
        console.log(p);
        return {value: (p.unit != '%' ? rel : 100) - p.value}
    }

    $scope.updateval = (id, side) => {
        const widget = $scope.widget;
        addAlignment(widget, wtable[parseInt(id)], side);
        moveWidgetWithDeps(widget, 0, 0);
        drawElementsBoundaries();
    };

    $scope.updatehal = (id, side) => {
        const widget = $scope.widget;
        addAlignment(widget, wtable[parseInt(id)], side);
        moveWidgetWithDeps(widget, 0, 0);
        drawElementsBoundaries();
    };


    $scope.togglePositionAlignment = al => {
        const parent = $scope.widget.parent;
        const el = $scope.widget.el;
        const position = $scope.widget.position;

        const bp = getElementBoundaries(parent.el);
        const b = getElementBoundaries(el);

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

angular.module('openspire-editor').controller('DeviceSelectorButtonsCtrl', $scope => {
    $scope.radioModel = 'iPad';
    $scope.toggleMode = () => {
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

