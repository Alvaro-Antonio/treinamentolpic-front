import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { SimulatedComponent } from './simulated.component';

@NgModule({
    declarations: [
      SimulatedComponent
    ],
    imports: [
      MatRadioModule
    ],
  })
  export class SimulatedModule { }