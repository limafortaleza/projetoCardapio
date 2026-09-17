export class Produto {
    nomeProduto;
    preco;
    tipo;
    constructor(
    // public id: string,
    nomeProduto, preco, tipo) {
        this.nomeProduto = nomeProduto;
        this.preco = preco;
        this.tipo = tipo;
    }
    validarDados() {
        if (this.nomeProduto.length < 3) {
            throw new Error("nome incorreto");
        }
        alert("Cadastrou nome correto");
        return true;
    }
}
//# sourceMappingURL=produtos.js.map