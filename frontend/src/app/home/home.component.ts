import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public nomeUsuario: String = '';
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    if (this.nomeUsuario === '') {
      this.nomeUsuario = this.usuarioService.nomeUsuario;
    }
  }
}
