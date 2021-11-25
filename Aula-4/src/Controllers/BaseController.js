const ApiConstants = require("../Enums/ApiConstants");
class BaseControler{
    constructor(expressInstance){
        if(!expressInstance){
            throw new Error("A instância do express é obrigatória");
        }
        this.express = expressInstance;
        this.setupRoutes(ApiConstants.BASE_PATH);
    }
    setupRoutes(){
        throw new Error("setupRoutes deve ser implementado");
    }
}
module.exports = BaseControler;