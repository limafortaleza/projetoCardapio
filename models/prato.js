import { Produto } from "./produtos.js";
export class Prato extends Produto {
    constructor(nome, descricao, preco, categoria, imagem) {
        super(nome, descricao, preco, categoria, imagem);
    }
    //Criando o objeto dentro da própia classe:
    static criar(nome, descricao, preco, imagem) {
        return new Prato(nome, descricao, preco, "Pratos", imagem);
    }
    calculaPrecoFinal() {
        return this.preco;
    }
}
