const listaDePessoas = ["Samuel", "Catarina", "Osvaldo","Flávia", "Giovane"];
const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaDePessoas.includes(nome)){
    console.log("Você não foi convidado!");
    return;
}

if (idade<18){
    console.log("Você não tem a idade nescessaria para entrar!");
    return;
}else{
    console.log("Você pode proseguir. Boa festa!")
}