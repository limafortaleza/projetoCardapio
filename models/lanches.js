import { Produto } from "./produtos.js";
export class Lanches extends Produto {
    constructor(nome, descricao, preco, categoria, imagem, id) {
        super(nome, descricao, preco, categoria, imagem, id);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem, id) {
        return new Lanches(nome, descricao, preco, categoria, imagem, id);
    }
    calculaPrecoFinal() {
        return this.preco * 1.5;
    }
}
