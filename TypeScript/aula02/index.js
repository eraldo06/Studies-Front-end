"use strict";
// Boolean
const contapaga = false;
// Number
const idade = 23;
const avalicao = 4.5;
// String
const nome = 'Eraldo Leonardo';
// Array
const idades = [23, 20, 21, 19]; // array de numeros
const idades2 = [23, 20, 21, 19]; // array de numeros
console.log(idades);
const gatos = [
    'neto',
    'junioe',
    'valmir'
];
function exibeGatos(gatos) {
    return `Os agtos são: ${gatos.join(', ')}`;
}
console.log(exibeGatos(gatos));
// Tuple
let jogadores;
jogadores = ['Eraldo', 'Leonardo', 'Paulino'];
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao[statusAprovacao["aprovado"] = 0] = "aprovado";
    statusAprovacao[statusAprovacao["pedente"] = 1] = "pedente";
    statusAprovacao[statusAprovacao["reprovado"] = 2] = "reprovado";
})(statusAprovacao || (statusAprovacao = {}));
const statusDaAprovacao = statusAprovacao.aprovado;
// Any
const retornoDaApi = [123, 'Eraldo', false];
// Void / void é do tipo que não retorna nada
function printarNatela(msg) {
    console.log(msg);
}
// Null e Undefined
const u = undefined;
const m = null;
// Object
function criar(Object) {
    // ..
}
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
// Union Types
const nota = 5;
function exibirnota(nota) {
    console.log(`A nota é ${nota}`);
}
exibirnota('10');
exibirnota(10);
// type funcionarios = Array<Funcionario>
const funcionarios = [
    {
        nome: 'string',
        sobrenome: 'string',
        dataNascimento: new Date()
    }, {
        nome: 'string',
        sobrenome: 'string',
        dataNascimento: new Date()
    }
];
