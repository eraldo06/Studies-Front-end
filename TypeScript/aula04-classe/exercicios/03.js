var Carro = /** @class */ (function () {
    function Carro(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.velocidadeatual = 10;
        this.velocidadeMax = 200;
    }
    Carro.prototype.acelerar = function (acelerar) {
        if (this.velocidadeatual + acelerar <= this.velocidadeMax) {
            var velocidade = this.velocidadeatual + acelerar;
            return (("Sua velocidade atual \u00E9 ".concat(velocidade)));
        }
        else {
            return 'você atingiu a velocidade maxima';
        }
    };
    Carro.prototype.deminiur = function (diminuir) {
        if (this.velocidadeatual + diminuir > 1) {
            var velocidade = this.velocidadeatual - diminuir;
            return ("voc\u00EA deminiu, sua velocidade \u00E9 ".concat(velocidade));
        }
        else {
            return ("voce est\u00E1 parado");
        }
    };
    return Carro;
}());
var meuCarro = new Carro('velox', 'modelomax');
console.log(meuCarro.deminiur(5));
