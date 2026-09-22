export {};
import { GerenciadorCardapio } from "./gerenciadorCardapio.js";
import { Produto } from "./produtos.js";
import { listarPratos, salvarPrato } from "./services/service.js";
const nome = document.querySelector("#nomeProduto");
const descricao = document.querySelector("#descricao");
const precoProduto = document.querySelector("#precoProduto");
const categoria = document.querySelector("#tipoProduto");
const imagemInput = document.querySelector("#urlDaImagem");
const formulario = document.querySelector("#formProduto");
const resultado = document.querySelector("#resultado");
const lista = new GerenciadorCardapio([]);
lista.listarCardapio();
console.log(lista);
formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    //cria meu objeto
    const prato = new Produto(nome.value, descricao.value, Number(precoProduto.value), categoria.value, imagemInput.value);
    //método de produto que vai validar os dados. Se tudo ok, salva na service.
    if (prato.validarDados()) {
        await salvarPrato(prato);
        alert("Dados cadastrados com sucesso!");
        formulario.reset();
        resultado.innerHTML += prato.criarCard();
    }
});
