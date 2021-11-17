const Boleto = require("./Boleto");
const Pix = require("./Pix");
const tipoPagamento = require(`./tipo-pagamento`);
const formaDePagamento = process.argv[2];
const valor = process.argv[3];
let objetoFormaPagamento; 
const eBoleto = formaDePagamento.toLowerCase() === tipoPagamento.BOLETO.toLowerCase();
const ePix = formaDePagamento.toLowerCase() === tipoPagamento.PIX.toLowerCase();
if(eBoleto){
    objetoFormaPagamento = new Boleto;
}else if(ePix){
    objetoFormaPagamento =  new Pix;
}else{
    console.log("Forma de pagamento invalida!");
    return; 
};
if (!formaDePagamento){
    console.log("Forma de pagamento não informada");
    return;
};
if(!valor){
    console.log("Valor não informado!");
    return;
};
objetoFormaPagamento.efetuarPagamento(valor);