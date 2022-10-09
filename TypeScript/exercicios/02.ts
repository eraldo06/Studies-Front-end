// Class pai
class Veiculo{
    constructor(public marca:string, public modelo:string,public quantidade_de_rodas:number, public quantidade_de_portas:number, public velocidade:number){}
}

// Class filho
class Carro extends Veiculo{
    constructor(public marca:string, public modelo:string,public quantidade_de_rodas:number, public quantidade_de_portas:number, public velocidade:number, public dono:string){
        super(marca, modelo, quantidade_de_rodas, quantidade_de_portas,velocidade)
    }
}


// Criando um carro
const carro = new Carro('marca1','modeo1',4,4,0,'Eraldo')

console.log(carro.dono);
