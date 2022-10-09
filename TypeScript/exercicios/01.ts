class Usuario{
    constructor(public nome:string,public idade:number,public email:string,public senha:string,){}
}

const usuario = new Usuario('eraldo',20,'eraldo@e','13245')

console.log(usuario.idade);
