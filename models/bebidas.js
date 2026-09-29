import { Produto } from "./produtos.js";
export class Bebidas extends Produto {
    constructor(nome, descricao, preco, categoria, imagem) {
        super(nome, descricao, preco, categoria, imagem);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, categoria, imagem) {
        return new Bebidas(nome, descricao, preco, categoria, imagem);
    }
    calculaPrecoFinal() {
        return this.preco * 1.1;
    }
}
