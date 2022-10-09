
interface Usuario{
    nome: string ;
    email: string;
    adrress?: string; // opcional
}

function getUser(): Usuario{  // ese objeto recebe a interface do Usuário
    return{
        nome: 'Eraldo',
        email: 'eraldo@email',
        adrress: 'fs'
    }
}

console.log(getUser().nome);
