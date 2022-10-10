
// interface Usuario{
//     nome: string ;
//     email: string;
//     adrress?: string; // opcional
// }

// function getUser(): Usuario{  // ese objeto recebe a interface do Usuário
//     return{
//         nome: 'Eraldo',
//         email: 'eraldo@email',
//         adrress: 'fs'
//     }
// }

// console.log(getUser().nome);


interface Usuario{
    nome: string ;
    email: string;
    senha?: string; // opcional
}

function getUser(): Usuario{  // ese objeto recebe a interface do Usuário
    return{
        nome: 'Eraldo',
        email: 'eraldo@email',
        senha: 'fs',
    }
}

console.log(getUser());


// tambem pode ser feito assim
const pessoa:Usuario={
    nome: 'Eraldo',
    email: 'eraldo@email',
    
}
console.log(pessoa);
