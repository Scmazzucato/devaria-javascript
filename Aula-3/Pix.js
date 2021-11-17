const FormaPagamento = require("./Forma-Pagamento");
class Pix extends FormaPagamento{
    efetuarPagamento(valor){
        console.log(`Efetuando pagamento de R$ ${valor} no íx`);
    };
};
module.exports = Pix;