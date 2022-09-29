// Boolean
const contapaga: boolean = false;


// Number
const idade: number = 23;
const avalicao: number = 4.5;


// String
const nome: string = 'Eraldo Leonardo';


// Array
const idades: number[] = [23,20,21,19];  // array de numeros
const idades2: Array<number> = [23,20,21,19]; // array de numeros

console.log(idades);

const gatos: string[] =[
    'neto',
    'junioe',
    'valmir'
]

function exibeGatos(gatos: string[]){
    return `Os agtos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos));




// Tuple
let jogadores: [string, string, string];
jogadores = ['Eraldo', 'Leonardo', 'Paulino'];


// Enum
enum statusAprovacao{
    aprovado,
    pedente,
    reprovado,
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.aprovado;


// Any
const retornoDaApi: any[]= [123,'Eraldo',false];


// Void / void é do tipo que não retorna nada
function printarNatela(msg: string): void{
    console.log(msg);
}


// Null e Undefined
const u: undefined = undefined;
const m: null = null;


// Object
function criar(Object: object){
    // ..
}


// Never
function loopInfinito(): never{
    while(true){}
}

function erro(mensagem: string){
    throw new Error(mensagem);
}

// Union Types
const nota: string | number = 5;
function exibirnota(nota: number | String){
    console.log(`A nota é ${nota}`);
}

exibirnota('10');
exibirnota(10);


// Alias
type funcionario ={
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type funcionarios = Array<Funcionario>
const funcionarios: funcionario[] =[
    {
        nome: 'string',
        sobrenome: 'string',
        dataNascimento: new Date()
    },{
        nome: 'string',
        sobrenome: 'string',
        dataNascimento: new Date()
    }
]









