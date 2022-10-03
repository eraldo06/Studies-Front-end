var Carro = /** @class */ (function () {
    function Carro(modelo, marca, quantidadeDePortas, cor, velocidade) {
        this.modelo = modelo;
        this.marca = marca;
        this.quantidadeDePortas = quantidadeDePortas;
        this.cor = cor;
        this.velocidade = velocidade;
    }
    Carro.prototype.buzinar = function () {
        return console.log("O carro do modelo ".concat(this.modelo, " buzinou"));
    };
    Carro.prototype.acelerar = function () {
        return this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        return this.velocidade * 0;
    };
    return Carro;
}());
var carro = new Carro('modelo1', 'marca1', 5, 'vermelho', 50);
carro.buzinar();
