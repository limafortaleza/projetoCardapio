const API_URL = "http://localhost:3000/";
async function listarProdutos() {
    const resposta = await fetch(`${API_URL}/produtos`);
    return resposta.json();
}
async function gravarProduto(produto) {
    const resposta = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
    });
    return resposta.json();
}
export {};
//# sourceMappingURL=service.js.map