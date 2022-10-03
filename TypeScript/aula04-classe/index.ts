class Carro {
    modelo: string;
    marca: string;
    quantidadeDePortas: number;
    cor: string;
    velocidade: number;

    constructor(modelo: string, marca: string, quantidadeDePortas: number, cor: string, velocidade: number,) {
      
        this.modelo= modelo;
        this.marca= marca;
        this.quantidadeDePortas= quantidadeDePortas;
        this.cor= cor;
        this.velocidade= velocidade;
    }

    buzinar(){
        return console.log(`O carro do modelo ${this.modelo} buzinou`);
        
    }
    acelerar(){
        this.velocidade + 10
    }
    parar(){
        this.velocidade*0
    }

}

const carro = new Carro('modelo1', 'marca1', 5, 'vermelho', 50);

carro.buzinar()
