import { UserService } from './../../user/user.service';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyfsConfirmDialogComponentComponent } from 'src/app/shared/dialog/myfs-confirm-dialog-component/myfs-confirm-dialog-component.component';
import { AuthService } from '../auth.service';
import { MyErrorStateMatcher } from './ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  showDetails: true;

  @ViewChild('passwordComponentWithConfirmation', { static: true })
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;

  public registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  private navigateTo: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  buildForm() {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        password: [undefined, [Validators.required, Validators.minLength(8)]],
        passwordConfimation: [
          undefined,
          [Validators.required, Validators.minLength(8)],
        ],
        term: [false, [Validators.required]],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }
  get passwordConfimation(): AbstractControl {
    return this.registerForm.get('passwordConfimation');
  }

  submit() {
    if (this.password.value === this.passwordConfimation.value) {
      if (this.registerForm.valid) {
        this.authService.register(this.registerForm.value).subscribe(
          (result) => {
            this.toastr.success('Cadastrado com sucesso', 'Cadastro', {
              closeButton: true,
              progressBar: true,
            });

            this.autenticate();
          },
          (error) => {
            this.toastr.error(
              'Erro ao realizar cadastro: Verifique se os campos estão corretos',
              'Cadastro',
              {
                closeButton: true,
                progressBar: true,
              }
            );
          }
        );
      }
    } else {
      this.toastr.error(
        'Erro ao realizar cadastro: Senhas não coincidem',
        'Cadastro'
      ),
        {
          closeButton: true,
          progressBar: true,
        };
    }
  }

  openTermsDialog() {
    const dialogRef = this.dialog.open(MyfsConfirmDialogComponentComponent, {
      panelClass: 'myfs-modal-box',
      maxWidth: '500px',
    });
    dialogRef.componentInstance.titleMessage = 'Termos de uso e privacidade';
    dialogRef.componentInstance.descriptionMessage =
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

    dialogRef.componentInstance.confirmButtonMenssager = 'Aceitar';

    dialogRef.componentInstance.onClickCancel.subscribe((event) => {
      dialogRef.close();
    });

    dialogRef.componentInstance.onClickConfirm.subscribe((event) => {
      this.registerForm.get('term').setValue(true);
      dialogRef.close();
    });
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('passwordConfimation').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  redirectToDashboard() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }

  redirectToLogin() {
    this.router.navigate(['../login'], {
      relativeTo: this.activatedRoute,
    });
  }

  autenticate() {
    this.authService
      .authenticate(this.email.value, this.password.value)
      .subscribe(
        (result) => {
          this.authService.sucessfullLogin(result);
          this.redirectToDashboard();
          this.toastr.success('Bem-Vindo ao MyFastSurvey', 'MyfastSurvey', {
            closeButton: true,
            progressBar: true,
          });
        },
        (error) => {
          this.toastr.error(
            'Erro ao fazer login: Usuário ou senha inválidos.',
            'Autenticação',
            {
              closeButton: true,
              progressBar: true,
            }
          );
        }
      );
  }
}
