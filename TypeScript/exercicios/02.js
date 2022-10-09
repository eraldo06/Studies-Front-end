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
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, quantidade_de_rodas, quantidade_de_portas, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.quantidade_de_rodas = quantidade_de_rodas;
        this.quantidade_de_portas = quantidade_de_portas;
        this.velocidade = velocidade;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, quantidade_de_rodas, quantidade_de_portas, velocidade, dono) {
        var _this = _super.call(this, marca, modelo, quantidade_de_rodas, quantidade_de_portas, velocidade) || this;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.quantidade_de_rodas = quantidade_de_rodas;
        _this.quantidade_de_portas = quantidade_de_portas;
        _this.velocidade = velocidade;
        _this.dono = dono;
        return _this;
    }
    return Carro;
}(Veiculo));
var carro = new Carro('marca1', 'modeo1', 4, 4, 0, 'Eraldo');
console.log(carro.dono);
