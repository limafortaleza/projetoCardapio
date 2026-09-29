import { Produto } from "./produtos.js";

export class Pratos extends Produto {
  constructor(
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem: string
  ) {
    super(nome, descricao, preco, categoria, imagem);
  }

  //Criando o objeto dentro da própia classe:
  static criar(
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem: string,
  ) {
    return new Pratos(nome, descricao, preco, categoria, imagem);
  }

  override calculaPrecoFinal() {
    return this.preco;
  }


}
