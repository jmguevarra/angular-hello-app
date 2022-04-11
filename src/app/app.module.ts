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
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { CustomDirectives } from './basic-hightlights/custom-directives';
import { BetterHighlightsDirective } from './directives/better-highlights.directive';
import { UnlessDirective } from './directives/unless.directive';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { Users } from './shared/users.service';
import { CounterService } from './shared/counter.services';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LecturesComponent } from './lectures/lectures.component';
import { HouseLandComponent } from './lectures/house-land/house-land.component';
import { HouseComponent } from './lectures/house-land/house/house.component';
import { LandComponent } from './lectures/house-land/land/land.component';
import { DropdownDirective } from './shared/dropdown-directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


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
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    CustomDirectives,
    BetterHighlightsDirective,
    UnlessDirective,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    HeaderComponent,
    LecturesComponent,
    HouseLandComponent,
    HouseComponent,
    LandComponent,
    DropdownDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Users, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
