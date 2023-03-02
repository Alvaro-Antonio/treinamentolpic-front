import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'treinamentolpic'
  },
  {
    path:'treinamentolpic',
    loadChildren:() =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
      data: {
        breadcrumb: 'TreinamentoLPIC',
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
