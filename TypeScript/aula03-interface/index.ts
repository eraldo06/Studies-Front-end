
interface Usuario{
    nome: string;
    email: string;
    adrress?: string; // opcional
}

function getUser(): Usuario{  // ese objeto recebe a interface do Usuário
    return{
        nome: 'Eraldo',
        email: 'eraldo@email',
        
    }
}

console.log(getUser().nome);
