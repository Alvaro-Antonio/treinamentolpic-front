import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
    declarations: [
      UserComponent      
    ],
    imports: [
      CommonModule,
      UserRoutingModule,
      MatCardModule
    
    ],
    providers: [
    
    ]
  })
  export class UserModule { }