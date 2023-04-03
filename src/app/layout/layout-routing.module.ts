import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'user',
        },
        {
          path: 'simulated',
          loadChildren: () =>
            import('../simulated/simulated.module').then((m) => m.SimulatedModule),
          data: {
            breadcrumb: 'Simulador',
                  }
        },
        {
          path: 'question',
          loadChildren: () =>
            import('../question/question.module').then((m) => m.QuestionModule),
          data: {
            breadcrumb: 'Simulador',
                  },
          canLoad: [],
          canActivate: [],
        },
        {
          path: 'user',
          loadChildren: () =>
            import('../user/user.module').then((m) => m.UserModule),
          data: {
            breadcrumb: 'Usuário',
                  },
          canLoad: [],
          canActivate: [],
        },
        
      ],
    },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LayoutRoutingModule { }