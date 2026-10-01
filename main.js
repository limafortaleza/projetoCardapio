export {};
//*imports
import { Bebidas } from "./models/bebidas.js";
import { Lanches } from "./models/lanches.js";
import { Pratos } from "./models/pratos.js";
import { Produto } from "./models/produtos.js";
import { Venda } from "./models/vendas.js";
import { listarProdutos, listarVendas, salvarProduto, salvarVendas, } from "./services/service.js";
//*Capturando os elemntos do DOM.
const nome = document.querySelector("#nomeProduto");
const descricao = document.querySelector("#descricao");
const precoProduto = document.querySelector("#precoProduto");
const categoria = document.querySelector("#tipoProduto");
const imagemInput = document.querySelector("#urlDaImagem");
const formulario = document.querySelector("#formProduto");
const resultado = document.querySelector("#resultado");
const vendaAtual = document.querySelector("#venda-atual");
const totalGeralVendas = document.querySelector("#total-geral-vendas");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//*INÍCIO DO CÓDIGO
renderizarProduto();
renderizarVendas();
const classesDisponiveis = {
    Bebidas: Bebidas,
    Lanches: Lanches,
    Pratos: Pratos,
    Venda: Venda,
};
async function renderizarProduto() {
    let htmlCompleto = "";
    try {
        const exibirProdutos = await listarProdutos();
        if (exibirProdutos.length === 0) {
            resultado.innerHTML = `<p>Nenhum produto cadastrado no momento. Adicione o primeiro item do cardápio!</p>`;
        }
        else {
            exibirProdutos.forEach((item) => {
                //função de restaurar ela reconstrói o meu objeto/instancia com tudo o que ela tem(metodos, os propriedade. Pois quando volta da service, ele so vem em forma de objeto comum)
                const produto = restaurarProdutoDaApi(item);
                htmlCompleto += produto.criarCard();
            });
            resultado.innerHTML = htmlCompleto;
        }
    }
    catch (error) {
        alert("Não foi possível acessar a lista de produtos! Tente novamente!");
    }
}
//*FUNÇÃO QUE RECONSTRÓI AS PROPRIEDADES DA INSTÂNIA - trazendo da API
//Quando volta da API é preciso reconstruir o objeto com todas as suas características da classe para que eu possa ter acesso.
function restaurarProdutoDaApi(item) {
    // console.log("Categoria vinda da API:", item.categoria);
    const classeEscolhida = classesDisponiveis[item.categoria];
    // console.log("Classe escolhida", classeEscolhida);
    // Chamamos o método criar, UMA VEZ SÓ.
    return classeEscolhida.criar(item.nome, item.descricao, item.preco, item.categoria, item.imagem, item.id);
}
async function renderizarVendas() {
    try {
        const exibirVendas = await listarVendas();
        if (exibirVendas.length === 0) {
            totalGeralVendas.innerHTML = "Precisamos vender!";
        }
        else {
            exibirVendas.forEach((item) => {
                restaurarVendaDaApi(item);
                console.log(item);
            });
            totalGeralVendas.innerHTML = `R$ ${Venda.faturamentoTotal.toFixed(2)}`;
        }
    }
    catch (error) {
        console.log(error);
    }
}
//trazer os dados das instancias de vendas. A API só me traz o dado "CRU"
function restaurarVendaDaApi(item) {
    const venda = new Venda();
    item.produtos.forEach((produto) => {
        const produtoInstancia = restaurarProdutoDaApi(produto);
        venda.adicionar(produtoInstancia);
    });
    venda.finalizarVenda();
    return venda;
}
//*EVENTOS DOS BOTÕES DE VENDA E EXCLUSÃO
resultado.addEventListener("click", async (e) => {
    console.log("OI");
    const botaoClicado = e.target;
    const idDoProdutoClicado = botaoClicado.dataset.id; //id do db.jason
    let produtoEncontrado;
    //vai pegar meus produtos listado na service:
    const exibirProdutos = await listarProdutos();
    //*CLICANDO NO BOTÃO DE VENDA
    if (botaoClicado.dataset.acao === "vender") {
        console.log(`Botão de VENDA clicado! ID: ${idDoProdutoClicado}`);
        //percorrer a lista procurando o produto clicado
        produtoEncontrado = exibirProdutos.find((produto) => String(produto.id) === String(idDoProdutoClicado));
        //reconmpondo minha instancia só para exibir uma mensagem mais completa de confirmação de venda
        const produtoInstancia = restaurarProdutoDaApi(produtoEncontrado);
        const usuarioConfirmou = confirm(`Deseja confirmar a venda de ${produtoInstancia.consultaNome} - Valor R$ ${produtoInstancia.consultaPreco} ?`);
        if (usuarioConfirmou) {
            const novaVenda = new Venda();
            novaVenda.adicionar(produtoInstancia);
            novaVenda.finalizarVenda();
            vendaAtual.innerHTML = `R$ ${produtoInstancia.calculaPrecoFinal().toFixed(2)}`;
            totalGeralVendas.innerHTML = `R$ ${Venda.faturamentoTotal.toFixed(2)}`;
            try {
                await salvarVendas(novaVenda);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    //*CLICANDO NO BOTÃO DE EXCLUIR
    if (botaoClicado.dataset.acao === "excluir") {
        console.log(`Botão de EXCLUIR clicado! ID: ${idDoProdutoClicado}`);
        produtoEncontrado = exibirProdutos.find((produto) => String(produto.id) === String(idDoProdutoClicado));
        const confirmaExclusao = confirm(`Deseja confirmar a exclusão do produto`);
        if (confirmaExclusao) {
            produtoEncontrado = exibirProdutos.find((produto) => String(produto.id) === String(idDoProdutoClicado));
        }
    }
});
//*EVENTO DO MEU BOTÃO "CADASTRAR PRODUTO"
formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    // É dessa constante que vem a classeDisponível ("mapa" para escolher uma classe dinamicamente.)
    //   const classesDisponiveis: any = {
    //   Bebidas: Bebidas,
    //   Lanches: Lanches,
    //   Pratos: Pratos,
    // };
    const classeEscolhida = classesDisponiveis[categoria.value];
    //Criando minha instancia a partir da "classe"/categoria selecionada. Metodo criar está dentro de cada Classe
    const produto = classeEscolhida.criar(nome.value, descricao.value, Number(precoProduto.value), categoria.value, imagemInput.value);
    //* método de produto que vai validar os dados. Se tudo ok, salva na service.
    if (produto.validarDados()) {
        try {
            await salvarProduto(produto);
            alert("Dados cadastrados com sucesso!");
        }
        catch (error) {
            alert("Não foi possível salvar o produto!Tente novamente mais tarde.");
            console.log(error);
        }
        formulario.reset();
        window.location.reload();
    }
});
