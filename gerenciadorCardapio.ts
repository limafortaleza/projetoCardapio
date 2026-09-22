import { Produto } from "./produtos.js";
import { listarPratos } from "./services/service.js";

export class GerenciadorCardapio {
    
  constructor(
    private produto: Array<Produto>,
    
  ) {

  }

  async listarCardapio() {
    const lista = await listarPratos(); //lista vinda da API

    const resultado = document.querySelector("#resultado") as HTMLDivElement;

    for (const item of lista) {
      const prato = new Produto(
        item.nome,
        item.descricao,
        item.preco,
        item.categoria,
        item.imagem,
      );
      this.produto.push(prato);
      
      resultado!.innerHTML += prato.criarCard();
    }
  }
}
