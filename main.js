export {};
import { Produto } from "./produtos.js";
const nomeProduto = document.querySelector("#nomeProduto");
const precoProduto = document.querySelector("#precoProduto");
const tipoProduto = document.querySelector("#tipoProduto");
const imagemProduto = document.querySelector("#inputGroupFileAddon04");
const formulario = document.querySelector("#formProduto");
formulario?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const produto = new Produto(nomeProduto.value, precoProduto.value, tipoProduto.value);
    if (produto.validarDados()) {
        alert("nome correto");
    }
});
//# sourceMappingURL=main.js.map