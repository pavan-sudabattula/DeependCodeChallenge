"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cheque_service_1 = require("./services/cheque.service");
var ChequeListComponent = (function () {
    function ChequeListComponent(service) {
        this.service = service;
    }
    ChequeListComponent.prototype.ngOnInit = function () {
        this.cheques = this.service.getCheques();
    };
    ChequeListComponent.prototype.selectCheque = function (cheque) { this.selectedCheque = cheque; };
    return ChequeListComponent;
}());
ChequeListComponent = __decorate([
    core_1.Component({
        selector: 'cheque-list',
        templateUrl: './cheque-list.component.html',
        providers: [cheque_service_1.ChequeService]
    }),
    __metadata("design:paramtypes", [cheque_service_1.ChequeService])
], ChequeListComponent);
exports.ChequeListComponent = ChequeListComponent;
//# sourceMappingURL=cheque-list.component.js.map