const FormaPagamento = require("./Forma-Pagamento")
class Boleto extends FormaPagamento{
    efetuarPagamento(valor){
        console.log(`Efetuando pagamento de R$ ${valor} no boleto`);
    };
};
module.exports = Boleto;