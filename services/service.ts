import type { Produto } from "../produtos.js";

const API_URL = "http://localhost:3000";

export async function listarPratos() {
  const resposta = await fetch(`${API_URL}/produtos`);
  return resposta.json();
}

export async function salvarPrato(produto: Produto) {
  const resposta = await fetch(`${API_URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  return resposta.json();
}
