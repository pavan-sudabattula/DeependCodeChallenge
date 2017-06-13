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
var cheque_1 = require("../cheque");
var backend_service_1 = require("./backend.service");
var ChequeService = (function () {
    function ChequeService(backend) {
        this.backend = backend;
        this.cheques = [];
    }
    ChequeService.prototype.getCheques = function () {
        var _this = this;
        this.backend.getAll(cheque_1.Cheque).then(function (cheques) {
            (_a = _this.cheques).push.apply(_a, cheques);
            var _a;
        });
        return this.cheques;
    };
    return ChequeService;
}());
ChequeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [backend_service_1.BackendService])
], ChequeService);
exports.ChequeService = ChequeService;
//# sourceMappingURL=cheque.service.js.map