import { Produto } from "./produtos.js";
export class Pratos extends Produto {
    constructor(nome, descricao, preco, categoria, imagem) {
        super(nome, descricao, preco, categoria, imagem);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem) {
        return new Pratos(nome, descricao, preco, categoria, imagem);
    }
    calculaPrecoFinal() {
        return this.preco;
    }
}
