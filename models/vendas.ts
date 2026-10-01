import { Produto } from "./produtos.js";

export class Venda {
  private readonly produtos: Produto[] = [];
  private static faturamentoAcumulado: number = 0;

  constructor() {}

  //metodo que adiciona o produto na private readonly produtos: Produto[] = [];
  public adicionar(produto: Produto): void {
    this.produtos.push(produto);
  }

  // Calcula o total chamando o método polimórfico de cada produto
    public get totalDaVenda(): number {
        return this.produtos.reduce((acumulador, produto) => {
            return acumulador + produto.calculaPrecoFinal(); // Polimorfismo??
        }, 0);
    }
  
    public finalizarVenda(): void {
        Venda.faturamentoAcumulado += this.totalDaVenda;
    }

    //só pra retornar indiretamente o faturamentoAcumulado
    public static get faturamentoTotal(): number {
        return Venda.faturamentoAcumulado;
    }
 
}
