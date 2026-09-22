import { Produto } from "./produtos.js";
import { listarPratos } from "./services/service.js";
export class GerenciadorCardapio {
    produto;
    constructor(produto) {
        this.produto = produto;
    }
    async listarCardapio() {
        const dados = await listarPratos(); //lista vinda da API
        const resultado = document.querySelector("#resultado");
        for (const item of dados) {
            const prato = new Produto(item.nome, item.descricao, item.preco, item.categoria, item.imagem);
            this.produto.push(prato);
            resultado.innerHTML += prato.criarCard();
        }
    }
}
