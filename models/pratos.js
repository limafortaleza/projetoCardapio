import { Produto } from "./produtos.js";
export class Pratos extends Produto {
    constructor(nome, descricao, preco, categoria, imagem, id) {
        super(nome, descricao, preco, categoria, imagem, id);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem, id) {
        return new Pratos(nome, descricao, preco, categoria, imagem, id);
    }
    calculaPrecoFinal() {
        return this.preco;
    }
}
