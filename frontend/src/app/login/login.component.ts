import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  public invalidCredentialMsg: string = '';
  public username: string = '';
  public password: string = '';
  public retUrl: string = 'home';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const retUrl_ = params.get('retUrl');

      this.retUrl = retUrl_ ? retUrl_ : '';
      console.log('LoginComponent/ngOnInit ' + this.retUrl);
    });
  }

  loginUser() {
    this.usuarioService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((data) => {
        console.log('return to ' + this.retUrl);
        if (this.retUrl != null) {
          this.router.navigate([this.retUrl]);
        } else {
          this.router.navigate(['home']);
        }
      });
  }
}
