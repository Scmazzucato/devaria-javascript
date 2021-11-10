function numeroAleatorio(){
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

const olaMundo = ()=>{
    console.log("Olá Mundo!");
}
olaMundo();

function soma(numero1, numero2){
    return numero1 + numero2;
}
const primeiraSoma = soma(1,3);
const segundaSoma = soma(7,12);
console.log({
    primeiraSoma, segundaSoma
})
