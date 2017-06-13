"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var menu_config_1 = require("./menu-config");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var cheque_detail_component_1 = require("./cheque-detail.component");
var cheque_list_component_1 = require("./cheque-list.component");
var cheque_service_1 = require("./services/cheque.service");
var backend_service_1 = require("./services/backend.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, menu_config_1.routes],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, cheque_list_component_1.ChequeListComponent, cheque_detail_component_1.ChequeDetailComponent],
        providers: [backend_service_1.BackendService, cheque_service_1.ChequeService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map