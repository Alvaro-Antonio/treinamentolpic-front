import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { StorageService } from '../session/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  public loginForm: FormGroup;

  private navigateTo: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [undefined, [Validators.required, Validators.minLength(8)]]
    });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.authenticate(this.email.value, this.password.value).subscribe(result => {
        this.authService.sucessfullLogin(result);
        this.toastr.success('Logado com sucesso!', 'Autenticação', {
          closeButton: true,
          progressBar: true
        });
        this.toastr.success('Bem-Vindo(a) ao MyFastSurvey', 'Boas-vindas', {
          closeButton: true,
          progressBar: true
        });
      }, error => {
        this.toastr.error('Erro ao fazer login: Usuário ou senha inválidos.', 'Autenticação', {
          closeButton: true,
          progressBar: true
        });
      }, () => {
        this.router.navigate([atob(this.navigateTo)])
      })
    }
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  redirectToRecoverPassword() {
    this.router.navigate(['/recover-password'])
  }

}
