import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server-component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { CustomBindingComponent } from './custom-binding/custom-binding.component';
import { InputBindingComponent } from './custom-binding/input-binding/input-binding.component';
import { OutputBindingComponent } from './custom-binding/output-binding/output-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlert,
    ServerComponent,
    Assignment2Component,
    Assignment3Component,
    CustomBindingComponent,
    InputBindingComponent,
    OutputBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
