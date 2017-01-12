"use strict";
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var custom_typings_1 = require("../../../custom-typings");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: 'login',
        loadChildren: function () { return custom_typings_1.System.import('./login/login.module'); }
    },
    {
        path: 'register',
        loadChildren: function () { return custom_typings_1.System.import('./register/register.module'); }
    },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function () { return custom_typings_1.System.import('./dashboard/dashboard.module'); } },
            { path: 'editors', loadChildren: function () { return custom_typings_1.System.import('./editors/editors.module'); } },
            { path: 'components', loadChildren: function () { return custom_typings_1.System.import('./components/components.module'); } },
            { path: 'charts', loadChildren: function () { return custom_typings_1.System.import('./charts/charts.module'); } },
            { path: 'ui', loadChildren: function () { return custom_typings_1.System.import('./ui/ui.module'); } },
            { path: 'forms', loadChildren: function () { return custom_typings_1.System.import('./forms/forms.module'); } },
            { path: 'tables', loadChildren: function () { return custom_typings_1.System.import('./tables/tables.module'); } },
            { path: 'maps', loadChildren: function () { return custom_typings_1.System.import('./maps/maps.module'); } }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=pages.routing.js.map