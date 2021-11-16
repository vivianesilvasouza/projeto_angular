import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class GuardaRotaService implements CanActivate {
  public token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.usuarioService.isUsuarioLoggedIn()) {
      this.router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;
    }

    return true;
  }
}
