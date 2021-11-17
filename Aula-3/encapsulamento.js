const { prototype } = require("./reptil");

class Produto{
    #nome;
    #preco;
    #tipo;
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco,
        this.#tipo = "movel";
    };
    get nome (){
        return this.#nome;
    }
};
const produto = new Produto("Monitor", 2500);
console.log(produto.nome);