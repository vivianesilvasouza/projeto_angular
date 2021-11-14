import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Produto } from '../models';
import { ProdutoService } from '../services';

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

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos();
    for (let index = 0; index < this.produtos.length; index++) {
      console.log(this.produtos[index]);
    }
  }

  cadastrar(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.cadastrar(this.Produto);
      this.router.navigate(['/tarefas']);
    }
  }
}
