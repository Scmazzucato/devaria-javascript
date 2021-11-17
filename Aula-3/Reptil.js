const Animal = require("./animal");
class Reptil extends Animal{
    constructor(nome, controlaTemperatura){
        super(nome);
        this.controlaTemperatura = controlaTemperatura || false;
    };
};
module.exports = Reptil;