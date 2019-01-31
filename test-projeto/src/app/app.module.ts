import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons/dist';
import { ComponentDiretivaButtonComponent } from './component-diretiva-button/component-diretiva-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    ComponentDiretivaButtonComponent
  ],
  imports: [
    BrowserModule,
    Angular2PromiseButtonModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
