export class Produto {
    nome;
    descricao;
    preco;
    categoria;
    imagem;
    static proximoId = 1;
    id;
    constructor(nome, descricao, preco, categoria, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.imagem = imagem;
        this.id = Produto.proximoId;
        Produto.proximoId += 1;
    }
    validarDados() {
        if (this.nome.length < 3) {
            return false;
        }
        if (this.descricao.length < 3) {
            return false;
        }
        if (this.preco <= 0) {
            return false;
        }
        if (this.categoria === "") {
            return false;
        }
        return true;
    }
    criarCard() {
        const htmlGerado = `
      <div class="card" style="width: 18rem;">
        <img src="${this.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.nome}</h5>
          <p class="card-text">${this.preco.toFixed(2)}</p>
          <p class="card-text">${this.descricao}</p>
          <a href="#" class="btn btn-success">Editar</a>
          <a href="#" class="btn btn-danger">Excluir</a>
          
        </div>
      </div>

      
      `;
        return htmlGerado;
    }
}
