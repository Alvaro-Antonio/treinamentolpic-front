import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { SimulatedComponent } from './simulated.component';
import { BuildSimulatedComponent } from './build-simulated/build-simulated.component';
import { SimulatedRoutingModule } from './simulated-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
      SimulatedComponent,
      BuildSimulatedComponent
    ],
    imports: [
      CommonModule,
      MatRadioModule,
      SimulatedRoutingModule,
      MatButtonModule
    ],
    providers: [
    
    ]
  })
  export class SimulatedModule { }