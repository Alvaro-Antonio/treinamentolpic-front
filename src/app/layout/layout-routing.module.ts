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
          redirectTo: 'dashboard'
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
        
      ],
    },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LayoutRoutingModule { }