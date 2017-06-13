"use strict";
var nextId = 1;
var Cheque = (function () {
    function Cheque(name, date, amount) {
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.id = nextId++;
    }
    return Cheque;
}());
exports.Cheque = Cheque;
//# sourceMappingURL=cheque.js.map