const btn = document.querySelector("#btn"); // pegando id
const nome = document.querySelector("#nome"); // pegando id
toastr.options.positionClass = "toast-bottom-left";


// Quando eu apertar no enviar, se o campo nome tiver vazio, vau  dá erro.
// Se o campo nome tiver preencido, vai dá sucesso
btn.onclick = () => {
    if(!nome.value){
        return toastr.error('Dados incorretos');
    }
    toastr.success('Enviado');
};