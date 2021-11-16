import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { GuardaRotaService } from './services/guarda-rota.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [GuardaRotaService] },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [GuardaRotaService],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
