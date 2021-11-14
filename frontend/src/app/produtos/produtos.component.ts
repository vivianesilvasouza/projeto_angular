import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Produto } from '../models';
import { ProdutoService } from '../services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public produtos: Produto[];
  constructor(private produtoService: ProdutoService) {
    this.produtos = this.produtoService.listarProdutos();
  }

  produtoNome: string = '';
  produtoDescricao: string = '';
  produtoPreco: Number = 0;
  produtoCategorias: string = '';
  produtoImagem: string = '';

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos();
    for (let index = 0; index < this.produtos.length; index++) {
      console.log(this.produtos[index]);
    }
  }

  cadastrar(): void {
    let produto = new Produto(
      this.produtoNome,
      this.produtoDescricao,
      this.produtoPreco,
      this.produtoCategorias,
      this.produtoImagem
    );
    this.produtoService.cadastrar(produto);
    console.log('it does nothing', this.produtoNome);
  }
}
