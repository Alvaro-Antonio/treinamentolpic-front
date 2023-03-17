import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BuildSimulatedComponent } from "./build-simulated/build-simulated.component";

const routes : Routes = [
    {
        path: '',
        component: BuildSimulatedComponent,
        data: {
            breadcrumb: ''
        }
    },
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SimulatedRoutingModule{}