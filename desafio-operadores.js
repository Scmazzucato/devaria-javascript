const { copyFileSync } = require('fs');
const readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

const calculo = (num1, num2, operacao)=>{
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);

    switch(operacao){
        case "+":
            return primeiroNumero + segundoNumero;
        case "-":
            return primeiroNumero - segundoNumero;
        case "*":
            return primeiroNumero * segundoNumero;
        case "/":
            return primeiroNumero / segundoNumero;
        default:
            return 0;
    }
}

leitor.question("Digite o primeiro numero:\n",(primeiroNumero)=>{
leitor.question("Digite o segundo numero:\n",(segundoNumero)=>{
leitor.question("Digite a operação matemática desejada:\n", (operador)=>{
    const resultado = calculo(primeiroNumero, segundoNumero, operador);
    console.log({resultado})
    leitor.close();
})
});
});