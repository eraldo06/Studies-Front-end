class Carro{

    public velocidadeatual=10
    public velocidadeMax=200

    constructor(
        public nome:string,
        public modelo:string,
    ){}

    acelerar(acelerar:number){
        if(this.velocidadeatual+acelerar<=this.velocidadeMax){
            const velocidade = this.velocidadeatual + acelerar
            return(
                (`Sua velocidade atual é ${velocidade}`)
                
            )
        }else{
            return 'você atingiu a velocidade maxima'}}

    deminiur(diminuir){
        if(this.velocidadeatual+diminuir>1)
        {
            const velocidade = this.velocidadeatual - diminuir
            return(`você deminiu, sua velocidade é ${velocidade}`);

        } else {
            return(`voce está parado`)
        }

    }
}

const meuCarro = new Carro ('velox','modelomax');
console.log(meuCarro.deminiur(5));


