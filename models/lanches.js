import { Produto } from "./produtos.js";
export class Lanches extends Produto {
    constructor(nome, descricao, preco, categoria, imagem) {
        super(nome, descricao, preco, categoria, imagem);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem) {
        return new Lanches(nome, descricao, preco, categoria, imagem);
    }
    calculaPrecoFinal() {
        return this.preco * 1.5;
    }
}
