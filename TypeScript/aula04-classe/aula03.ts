class veiculo {
 
    constructor(public marca:string,public modelo:string,public quantidade_de_rodas:number,public velocidade:number){}}
 
class Moto extends veiculo{}
 
const Novamoto = new Moto('marca-moto','modelo-moto', 2,0);
console.log(Novamoto);
