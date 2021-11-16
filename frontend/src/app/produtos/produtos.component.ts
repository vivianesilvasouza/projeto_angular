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
  constructor(private produtoService: ProdutoService, private router: Router) {
    this.produtos = this.produtoService.listarProdutos();
  }

  produtoNome: string = '';
  produtoDescricao: string = '';
  produtoPreco: Number = 0.0;
  produtoCategorias: string = '';
  produtoImagem: string = '';
  produtoDataRemessa = Date();

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos();
    for (let index = 0; index < this.produtos.length; index++) {
      console.log(this.produtos[index]);
    }
  }

  cadastrar(): void {
    const dataRemessa = new Date(this.produtoDataRemessa);
    let produto = new Produto(
      this.produtoNome,
      this.produtoDescricao,
      this.produtoPreco,
      this.produtoCategorias,
      this.produtoImagem,
      dataRemessa
    );
    this.produtoService.cadastrar(produto);
    this.router.navigate(['/produtos']);
  }

  atualizar(): void {}

  remover(): void {}
}
