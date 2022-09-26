const btn = document.querySelector("#btn");
const nome = document.querySelector("#nome");
toastr.options.positionClass = "toast-bottom-left";

btn.onclick = () => {
    if(!nome.value){
        return toastr.error('Dados incorretos');
    }
    toastr.success('Enviado');
};