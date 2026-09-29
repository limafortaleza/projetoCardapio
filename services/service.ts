import type { Produto } from "../models/produtos.js";

const API_URL = "http://localhost:3000";

export async function listarProdutos() {
  const resposta = await fetch(`${API_URL}/produtos`);
  return resposta.json();
}

export async function salvarProduto(produto: Produto) {
  const resposta = await fetch(`${API_URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  return resposta.json();
}


export async function salvarVendas(produto: Produto) {
  const resposta = await fetch(`${API_URL}/vendas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  return resposta.json();
}