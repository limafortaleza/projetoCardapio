export class Produto {
  constructor(
    // public id: string,
    public nomeProduto: string,
    public preco: string,
    public tipo: string,
    // public imagem: File,
  ) {}

  validarDados() {
    if (this.nomeProduto.length < 3) {
      throw new Error("nome incorreto");
    }
    alert("Cadastrou nome correto");
    return true;
  }
}
