const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const btn = document.getElementById("btn");

function sum(a:number,b:number){
    return a+b;
}

btn?.addEventListener("click", function(){
    console.log(sum(Number(input1.value), Number(input2.value)));
    
});