// import { Bebidas } from "./models/bebidas.js";
// import { Produto } from "./models/produtos.js";
// import { Lanches } from "./models/lanches.js";
// import { Pratos} from "./models/pratos.js"
// import { listarProdutos } from "./services/service.js";
export {};
// export class ProdutoController {
//   private static produto: Produto[] = []; //so quem usa é a classe. Inicializo vazio
//   constructor() {}
//   adicionaNovoProduto(pratoCadastrado: Produto) {
//     const resultado = document.querySelector("#resultado") as HTMLDivElement;
//     ProdutoController.produto.push(pratoCadastrado); //joga o objeto dentro do meu array "produto"
//     resultado!.innerHTML += pratoCadastrado.criarCard();
//   }
//   async exibirProdutos() {
//     const lista = (await listarProdutos()) || []; //lista vinda da API
//     const resultado = document.querySelector("#resultado") as HTMLDivElement;
//     //faz a criação do objeto a partir do array vindo da API
//     for (const item of lista) {
//       let prato: Produto;
//       if (item.categoria === "Bebidas") {
//         prato = new Bebidas(
//           item.nome,
//           item.descricao,
//           item.precoFinal,
//           item.categoria,
//           item.imagem,
//         );
//       }if(item.categoria === "Lanches"){
//         prato = new Lanches(
//           item.nome,
//           item.descricao,
//           item.preco,
//           item.categoria,
//           item.imagem,
//         );
//       }else {
//         prato = new Pratos(
//           item.nome,
//           item.descricao,
//           item.preco,
//           item.categoria,
//           item.imagem,
//         );
//       }
//       ProdutoController.produto.push(prato); //joga o objeto dentro do meu array "produto"
//       //injeta os itens do array no HTML usando o método criarCard() da classe Produto (por causa do extends)
//       // console.log(ArmazenarListaProdutos.produto);
//       resultado!.innerHTML += prato.criarCard();
//     }
//   }
// }
