const Ave = require("./ave");
const Peixe = require("./peixe");
const Reptil = require("./reptil");
const Mamifero = require("./mamifero");
const nomeAnimal = process.argv[2];
if (!nomeAnimal){
    console.log("Favor passar o nome do animal!");
    return;
};
const listaAnimais = [
    new Mamifero("vaca",4),
    new Reptil("cobra"),
    new Ave("Gavião", true),
    new Peixe("Tubarão",2)
];
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLocaleLowerCase());
if (!animalSelecionado){
    console.log("O animal não está na nossa lista!");
    return;
};
if (animalSelecionado instanceof Mamifero){
    console.log(`O animal encontrado é um Mamifero com nome ${animalSelecionado.nome} e a quantidade de mamas é ${animalSelecionado.quantidadeMamas}`);
}else if (animalSelecionado instanceof Reptil){
    console.log(`O animal encontrado é um Reptil com nome ${animalSelecionado.nome} e sabe controlar a sua temperatura ${animalSelecionado.controlaTemperatura}`);
}else if (animalSelecionado instanceof Ave){
    console.log(`O animal encontrado é uma ave com nome ${animalSelecionado.nome} sabe voar ${animalSelecionado.voa}`);
}else if (animalSelecionado instanceof Peixe){
    console.log(`O animal encontrado é um Peixe com nome ${animalSelecionado.nome} e a quantidade de nadadeiras é ${animalSelecionado.quantidadeNadadeira}`);
}