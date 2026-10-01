import { Produto } from "./produtos.js";
export class Venda {
    produtos = [];
    static faturamentoAcumulado = 0;
    constructor() { }
    //metodo que adiciona o produto na private readonly produtos: Produto[] = [];
    adicionar(produto) {
        this.produtos.push(produto);
    }
    // Calcula o total chamando o método polimórfico de cada produto
    get totalDaVenda() {
        return this.produtos.reduce((acumulador, produto) => {
            return acumulador + produto.calculaPrecoFinal(); // Polimorfismo??
        }, 0);
    }
    finalizarVenda() {
        Venda.faturamentoAcumulado += this.totalDaVenda;
    }
    //só pra retornar indiretamente o faturamentoAcumulado
    static get faturamentoTotal() {
        return Venda.faturamentoAcumulado;
    }
}
