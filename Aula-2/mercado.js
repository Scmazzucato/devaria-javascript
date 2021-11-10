const readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const produtosMercado = ["arroz", "feijão", "batata", "carne", "refri"];
const validarLista = (listaMercado)=>{
    if (!listaMercado){
        throw Error("A lista não pode ser vazia!");
    }
    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;
    if (itensInvalidos > 0){
        throw Error(`Existem (${itensInvalidos})itens invalidos`)
    }
    return itensDesejados; 
};
const obterDisponibilidade = (listaValida)=>{
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];
    for (const item of listaValida){
        const itemFormatar = item.trim().toLowerCase();
        if (produtosMercado.includes(itemFormatar)){
            produtosDisponiveis.push(itemFormatar);
        }else{
            produtosIndisponiveis.push(itemFormatar);
        };
    };
    return{
        produtosDisponiveis,produtosIndisponiveis
    };
};
leitor.question("Digite a lista de produtos, separado por vírgula:\n",
    listaProdutos=>{
        try{
            const listaValida = validarLista(listaProdutos);
            const disponibilidade = obterDisponibilidade(listaValida);
            console.log("Os seguintes produtos estão disponiveis", disponibilidade.produtosDisponiveis);
            console.log("Os seguintes produtos estão indisponiveis", disponibilidade.produtosIndisponiveis);
            const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.localeCompare(produto2));
            console.log("Produtos disponiveis ordenados alfabeticamente", disponiveisOrdenados);
        }catch (e){
            console.log(`Erro ao processar lista, (${e.message})`);
        }
        finally{
            leitor.close();
        }
    });
