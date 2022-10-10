// interface Usuario{
//     nome: string ;
//     email: string;
//     adrress?: string; // opcional
// }
function getUser() {
    return {
        nome: 'Eraldo',
        email: 'eraldo@email',
        senha: 'fs'
    };
}
console.log(getUser());
// tambem pode ser feito assim
var pessoa = {
    nome: 'Eraldo',
    email: 'eraldo@email'
};
console.log(pessoa);
