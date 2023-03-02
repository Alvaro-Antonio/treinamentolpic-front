import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AlternativeComponent } from './alternative/alternative.component';
import { SimulatedComponent } from './simulated/simulated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserComponent } from './user/user.component';
import { StorageService } from './auth/session/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AlternativeComponent,
    SimulatedComponent,
    FeedbackComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
