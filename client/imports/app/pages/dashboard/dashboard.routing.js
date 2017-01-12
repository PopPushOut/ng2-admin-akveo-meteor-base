"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: dashboard_component_1.Dashboard,
        children: []
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map