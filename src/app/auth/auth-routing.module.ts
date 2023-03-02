import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login',
      roles: []
    },
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'login/:to',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login',
      roles: []
    },
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      breadcrumb: 'Cadastre-se',
      roles: []
    },
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
    data: {
      breadcrumb: 'Recuperar senha',
      roles: []
    },
    canLoad: [],
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
