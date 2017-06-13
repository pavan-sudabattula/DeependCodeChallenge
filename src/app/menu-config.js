"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var cheque_list_component_1 = require("./cheque-list.component");
exports.routerConfig = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'cheques',
        component: cheque_list_component_1.ChequeListComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
exports.routes = router_1.RouterModule.forRoot(exports.routerConfig);
//# sourceMappingURL=menu-config.js.map