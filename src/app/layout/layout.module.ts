import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    BreadcrumbModule,
    MatTooltipModule
  ]
})
export class LayoutModule { }
