const API_URL = "http://localhost:3000";
export async function listarProdutos() {
    const resposta = await fetch(`${API_URL}/produtos`);
    return resposta.json();
}
export async function salvarProduto(produto) {
    const resposta = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
    });
    return resposta.json();
}
export async function salvarVendas(venda) {
    const resposta = await fetch(`${API_URL}/vendas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(venda),
    });
    return resposta.json();
}
export async function listarVendas() {
    const resposta = await fetch(`${API_URL}/vendas`, {});
    return resposta.json();
}
// export async function deletarProduto(id) {
//   const resposta = await fetch(`${API_URL}/produtos/${id}`, {
//     method: 'DELETE'
//   });
//   return resposta.json(); 
// }
