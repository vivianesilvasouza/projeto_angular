import { Injectable } from '@angular/core';

import { Produto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  // private produtos: Produto[];

  constructor() {
    // this.produtos = [];
  }

  // private produtosObj = [
  //   {
  //     id: 1,
  //     nome: 'MacBook Pro 2021 16"',
  //     descricao:
  //       'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
  //     preco: 17499.0,
  //     categorias: '',
  //     imagem: '',
  //   },
  //   {
  //     id: 2,
  //     nome: 'MacBook Air 256GB 2020',
  //     descricao:
  //       'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
  //     preco: 10499.0,
  //     categorias: '',
  //     imagem: '',
  //   },
  //   {
  //     id: 3,
  //     nome: 'MacBook Air 512 GB 2021',
  //     descricao:
  //       'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
  //     preco: 13499.0,
  //     categorias: '',
  //     imagem: '',
  //   },
  //   {
  //     id: 4,
  //     nome: 'MacBook Pro 2019"',
  //     descricao:
  //       'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade',
  //     preco: 12499.0,
  //     categorias: '',
  //     imagem: '',
  //   },
  // ];

  listarProdutos(): Produto[] {
    const produtos = localStorage['produtos'];
    return produtos ? JSON.parse(produtos) : [];
  }

  cadastrar(produto: Produto): void {
    const produtos = this.listarProdutos();
    produto.id = new Date().getTime();
    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  buscarPorId(id: number): Produto | undefined {
    const produtos: Produto[] = this.listarProdutos();
    return produtos.find((produto) => produto.id === id);
  }

  atualizar(produto: Produto): void {
    const produtos: Produto[] = this.listarProdutos();
    produtos.forEach((obj, index, objs) => {
      if (produto.id === obj.id) {
        objs[index] = produto;
      }
    });
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  remover(id: number): void {
    let produtos: Produto[] = this.listarProdutos();
    produtos = produtos.filter((produto) => produto.id !== id);
    localStorage['produtos'] = JSON.stringify(produtos);
  }
}
