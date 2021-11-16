import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { TokenJwt } from '../models/tokenjwt';

@Injectable()
export class UsuarioService {
  private token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo';
  private isloggedIn: boolean;
  public nomeUsuario: string = this.getNome();

  constructor() {
    this.isloggedIn = false;
  }

  login(login: string, password: string) {
    const token = jwt_decode<TokenJwt>(this.token);
    if (login === 'teste' && password === 'teste') {
      localStorage['tokenJwt'] = this.token;
      console.log(token);
      this.isloggedIn = true;
      this.nomeUsuario = token.name;
    }

    return of(this.isloggedIn);
  }

  isUsuarioLoggedIn(): boolean {
    return localStorage['tokenJwt'] === this.token;
  }

  getNome() {
    const local_store = localStorage['tokenJwt'];
    if (local_store) {
      const token = jwt_decode<TokenJwt>(local_store);
      return token.name ? token.name : '';
    }
    return '';
  }

  logoutUsuario(): void {
    this.isloggedIn = false;
  }
}
