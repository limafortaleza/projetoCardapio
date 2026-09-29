export {};
//*imports
import { Bebidas } from "./models/bebidas.js";
import { Lanches } from "./models/lanches.js";
import { Pratos } from "./models/pratos.js";
import { Produto } from "./models/produtos.js";

import { listarProdutos, salvarProduto } from "./services/service.js";

//*Capturando os elemntos do DOM.
const nome = document.querySelector("#nomeProduto") as HTMLInputElement;
const descricao = document.querySelector("#descricao") as HTMLInputElement;
const precoProduto = document.querySelector(
  "#precoProduto",
) as HTMLInputElement;
const categoria = document.querySelector("#tipoProduto") as HTMLSelectElement;
const imagemInput = document.querySelector("#urlDaImagem") as HTMLInputElement;
const formulario = document.querySelector("#formProduto") as HTMLFormElement;
const resultado = document.querySelector("#resultado") as HTMLDivElement;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//*INÍCIO DO CÓDIGO

renderizarProduto();

// const classes : Produto[] = [objetos,pratos,lanches]


const classesDisponiveis: any = {
  Bebidas: Bebidas,
  Lanches: Lanches,
  Pratos: Pratos,
};

async function renderizarProduto() {
  let htmlCompleto = "";

  try {
    const exibirProdutos = await listarProdutos();
    if (exibirProdutos.length === 0) {
      resultado!.innerHTML = `<p>Nenhum produto cadastrado no momento. Adicione o primeiro item do cardápio!</p>`;
    } else {
      exibirProdutos.forEach((item: any) => {
        //função de restaurar ela reconstrói o meu objeto/instancia com tudo o que ela tem(metodos, os propriedade. Pois quando volta da service, ele so vem em forma de objeto comum)
        const produto = restaurarProdutoDaApi(item);
        htmlCompleto += produto.criarCard();
      });
      resultado.innerHTML = htmlCompleto;
    }
  } catch (error) {
    return "oi";
  }
}


//*FUNÇÃO QUE RECONSTRÓI AS PROPRIEDADES DA INSTÂNIA
//Quando volta da API é preciso reconstruir o objeto com todas as suas características da classe para que eu possa ter acesso.

function restaurarProdutoDaApi(item: any): Produto {
  console.log("Categoria vinda da API:", item.categoria);

  const classeEscolhida = classesDisponiveis[item.categoria] || Pratos;

  console.log("Classe escolhida", classeEscolhida);

  // Chamamos o método criar, UMA VEZ SÓ.
  return classeEscolhida.criar(
    item.nome,
    item.descricao,
    item.preco,
    item.categoria,
    item.imagem,
  );
}

//*Eventos dos botões de venda e exclusão

resultado.addEventListener("click", async (e) => {
  const botaoClicado = e.target as HTMLElement;

  if (botaoClicado.dataset.acao === "vender") {
    const idDoProduto = botaoClicado.dataset.id;
    console.log(`Botão de VENDA clicado! ID: ${idDoProduto}`);
    //vai percorrer o meu array de produtos :
  }
  if (botaoClicado.dataset.acao === "excluir") {
    const idDoProduto = botaoClicado.dataset.id;
    console.log(`Botão de EXCLUIR clicado! ID: ${idDoProduto}`);
  }
});



//*EVENTO DO MEU BOTÃO "CADASTRAR PRODUTO"
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
 
  const classeEscolhida = classesDisponiveis[categoria.value];

  const produto = classeEscolhida.criar(
    nome.value,
    descricao.value,
    Number(precoProduto.value),
    categoria.value,
    imagemInput.value,
  );

  //* método de produto que vai validar os dados. Se tudo ok, salva na service.
  if (produto.validarDados()) {
    try {
      await salvarProduto(produto);
      alert("Dados cadastrados com sucesso!");
    } catch (error) {
      alert(
        "Problemas de conexão com o banco de dados!Tente novamente mais tarde.",
      );
      console.log(error);
    }
    formulario.reset();
    window.location.reload();
  }
});
