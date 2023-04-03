import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { SimulatedComponent } from './simulated.component';
import { BuildSimulatedComponent } from './build-simulated/build-simulated.component';
import { SimulatedRoutingModule } from './simulated-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [
      SimulatedComponent,
      BuildSimulatedComponent,

    ],
    imports: [
      CommonModule,
      MatRadioModule,
      SimulatedRoutingModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatDividerModule,
      MatCheckboxModule,
      MatListModule,
      MatIconModule,
      MatTooltipModule
    
    ],
    providers: [
    
    ]
  })
  export class SimulatedModule { }