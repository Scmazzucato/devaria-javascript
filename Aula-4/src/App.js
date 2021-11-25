const express = require("express");
const ApiConstants = require("./Enums/ApiConstants")
const swaggerUi = require("swagger-ui-express");
const sweaggerFile = require("./Swagger/swagger.json");
const UserController = require("./Controllers/UserController");
class App{
    start(){
        this.setupExpress();
        this.loadControllers();
        this.startServer();
    }
    setupExpress(){
        this.express = express();
        this.express.use(`${ApiConstants.BASE_PATH}/docs`, swaggerUi.serve, swaggerUi.setup(sweaggerFile));
        this.express.use((req, res, next)=>{
            console.log(req.method, req.url);
            next();
        });
    }
    loadControllers(){
        this.controller=[
            new UserController(this.express)
        ]
    }
    startServer(){
        const port = 3001;
        this.express.listen(port, ()=>{
            console.log("API está executando na porta", port);
        });
    }
}
module.exports = App;