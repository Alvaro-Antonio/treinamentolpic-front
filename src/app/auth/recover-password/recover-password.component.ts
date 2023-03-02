import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  public emailForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submit() {
    if (this.emailForm.valid) {
      this.authService.resetPassword(this.email.value).subscribe(result => {
        this.toastr.success('Se email existir, uma nova senha foi gerada e enviada para ele, verifique sua caixa de email.', 'Recuperar Senha', {
          closeButton: true,
          progressBar: true
        });
        this.redirectToLogin();
      }, error => {
        this.toastr.error('Erro ao recuperar senha.', 'Recuperar Senha', {
          closeButton: true,
          progressBar: true
        });
      })
    }
  }

  buildForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  get email(): AbstractControl {
    return this.emailForm.get('email');
  }

  get password(): AbstractControl {
    return this.emailForm.get('password');
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
