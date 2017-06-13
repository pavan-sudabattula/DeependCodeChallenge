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
var cheque_1 = require("./cheque");
var ChequeDetailComponent = (function () {
    function ChequeDetailComponent() {
        this.thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
        this.digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        this.tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        this.twenties = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    }
    ChequeDetailComponent.prototype.getAmountInWords = function (amt) {
        amt = amt.toString();
        var dollarAmt;
        var centAmt;
        var numArr = amt.split(".", 2);
        dollarAmt = numArr[0];
        centAmt = numArr[1];
        var dollarWords = this.toWords(dollarAmt);
        var centWords = this.toWords(centAmt);
        var result = (dollarWords + ' dollars and ' + centWords + ' cents');
        return result.toUpperCase();
    };
    ChequeDetailComponent.prototype.toWords = function (num) {
        num = num.toString();
        var numLength = num.length;
        if (numLength > 15)
            return 'too big';
        var digitArr = num.split('');
        console.log(digitArr);
        var inWords = '';
        var flag = 0;
        for (var i = 0; i < numLength; i++) {
            if ((numLength - i) % 3 == 2) {
                if (digitArr[i] == '1') {
                    inWords += this.tens[Number(digitArr[i + 1])] + ' ';
                    i++;
                    flag = 1;
                }
                else if (digitArr[i] !== '0') {
                    inWords += this.twenties[Number(digitArr[i]) - 2] + ' ';
                    flag = 1;
                }
            }
            else if (digitArr[i] !== '0') {
                inWords += this.digits[digitArr[i]] + ' ';
                if ((numLength - i) % 3 == 0)
                    inWords += 'hundred ';
                flag = 1;
            }
            if ((numLength - i) % 3 == 1) {
                if (flag)
                    inWords += this.thousands[(numLength - i - 1) / 3] + ' ';
                flag = 0;
            }
        }
        return inWords;
    };
    return ChequeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cheque_1.Cheque)
], ChequeDetailComponent.prototype, "cheque", void 0);
ChequeDetailComponent = __decorate([
    core_1.Component({
        selector: 'cheque-detail',
        templateUrl: './cheque-detail.component.html'
    })
], ChequeDetailComponent);
exports.ChequeDetailComponent = ChequeDetailComponent;
//# sourceMappingURL=cheque-detail.component.js.map