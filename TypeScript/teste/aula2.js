var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.somar = function () {
        return ('somar');
    };
    calculadora.prototype.subtrair = function () {
        return ('subtrair');
    };
    calculadora.prototype.multiplicar = function () {
        return ('multiplicar');
    };
    calculadora.prototype.dividir = function () {
        return ('dividir');
    };
    return calculadora;
}());
var somas = /** @class */ (function (_super) {
    __extends(somas, _super);
    function somas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return somas;
}(calculadora));
