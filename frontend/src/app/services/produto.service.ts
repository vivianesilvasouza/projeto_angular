import { Injectable } from '@angular/core';

import { Produto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[];

  constructor() {
    this.produtos = [];
  }

  private produtosObj = [
    {
      id: 1,
      nome: 'MacBook Pro 2021 16"',
      descricao:
        'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
      preco: 17499.0,
    },
    {
      id: 2,
      nome: 'MacBook Air 256GB 2020',
      descricao:
        'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
      preco: 10499.0,
    },
    {
      id: 3,
      nome: 'MacBook Air 512 GB 2021',
      descricao:
        'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
      preco: 13499.0,
    },
    {
      id: 4,
      nome: 'MacBook Pro 2019"',
      descricao:
        'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
      preco: 12499.0,
    },
  ];

  listarProdutos(): Produto[] {
    if (this.produtos.length > 0) {
      return this.produtos;
    }

    this.produtos = this.produtosObj;
    return this.produtos;
  }

  cadastrar(produto: Produto): void {
    const produtos = this.listarProdutos();
    produto.id = new Date().getTime();
    produtos.push(produto);
  }

  buscarPorId(id: number): Produto | undefined {
    const produtos: Produto[] = this.listarProdutos();
    const produto = produtos.find((pro) => pro.id === id);
    return produto;
  }

  atualizar(produto: Produto): void {
    const produtos: Produto[] = this.listarProdutos();
    produtos.forEach((obj, index, objs) => {
      if (produto.id === obj.id) {
        objs[index] = produto;
      }
    });
    this.produtos = produtos;
  }

  remover(id: number): void {
    let produtos: Produto[] = this.listarProdutos();
    this.produtos = produtos.filter((produto) => produto.id !== id);
  }
}
