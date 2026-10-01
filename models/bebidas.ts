import { Produto } from "./produtos.js";

export class Bebidas extends Produto {
  constructor(
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem: string,
    id:string
  ) {
    super(nome, descricao, preco, categoria, imagem,id);
  }

  //Criando o objeto dentro da própia classe:
  static criar(
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem: string,
    id:string
  ) {
    return new Bebidas(nome, descricao, preco, categoria, imagem,id);
  }

  override calculaPrecoFinal() {
    return this.preco * 1.1;
  }
}
