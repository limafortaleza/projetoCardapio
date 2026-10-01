import type { IProduto } from "../interfaces/IProduto";

export abstract class Produto implements IProduto {
  // private acumulado: number = 0;
  public precoFinal: number;
  private static proximoId = 1;
  readonly id: string;
  // private static vendaTotal: number = 0;
  constructor(
    protected nome: string,
    protected descricao: string,
    protected preco: number,
    protected categoria: string,
    protected imagem: string,
    id?: string,
  ) {
    this.id = id || "";
    // this.id = Produto.proximoId;
    // Produto.proximoId += 1;

    this.precoFinal = this.calculaPrecoFinal();
  }

  get consultaNome(): string {
    return this.nome;
  }

  get consultaPreco(): number {
    return this.calculaPrecoFinal();
  }

  validarDados() {
    if (this.nome.length < 3) {
      return false;
    }
    if (this.descricao.length < 3) {
      return false;
    }
    if (this.preco <= 0) {
      return false;
    }
    if (this.categoria === "") {
      return false;
    }
    if (this.imagem === "") {
      return false;
    }
    return true;
  }

  public calculaPrecoFinal(): number {
    return this.preco;
  }

  criarCard(): string {
    const htmlGerado = `
      <div class="card" style="width: 18rem;">
          <img src="${this.imagem}" class="card-img-top" alt="${this.descricao}">
          <div class="card-body">
            <h5 class="card-title">${this.nome}</h5>
            <p class="card-text">R$ ${this.precoFinal.toFixed(2)}</p>
            <p class="card-text">${this.descricao}</p>
            <button type="button" class="btn btn-success" data-acao="vender" data-id="${this.id}">Venda</button>
            <button type="button" class="btn btn-danger" data-acao="excluir" data-id="${this.id}">Excluir</button>
          </div>
      </div>   
      `;
    return htmlGerado;
  }
}
