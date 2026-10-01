import { Produto } from "./produtos.js";
export class Bebidas extends Produto {
    constructor(nome, descricao, preco, categoria, imagem, id) {
        super(nome, descricao, preco, categoria, imagem, id);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem, id) {
        return new Bebidas(nome, descricao, preco, categoria, imagem, id);
    }
    calculaPrecoFinal() {
        return this.preco * 1.1;
    }
}
