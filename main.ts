export {};
import { Produto } from "./produtos.js";

const nomeProduto = document.querySelector("#nomeProduto") as HTMLInputElement;
const precoProduto = document.querySelector(
  "#precoProduto",
) as HTMLInputElement;
const tipoProduto = document.querySelector("#tipoProduto") as HTMLSelectElement;
const imagemProduto = document.querySelector(
  "#inputGroupFileAddon04",
) as HTMLInputElement;
const formulario = document.querySelector("#formProduto") as HTMLFormElement;

formulario?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const produto = new Produto(
    nomeProduto.value,
    precoProduto.value,
    tipoProduto.value,
    // imagemProduto.value,
  );

  if (produto.validarDados()) {
    alert("nome correto");
  }
});
