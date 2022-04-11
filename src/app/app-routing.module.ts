import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AssignmentsComponent } from "./assignments/assignments.component";
import { HomeComponent } from "./home/home.component";
import { HouseLandComponent } from "./lectures/house-land/house-land.component";
import { HouseComponent } from "./lectures/house-land/house/house.component";
import { LandComponent } from "./lectures/house-land/land/land.component";
import { LecturesComponent } from "./lectures/lectures.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'assignment', component: AssignmentsComponent},
    { path: 'lectures', component: LecturesComponent, children: [
        { path: 'house-land', component: HouseLandComponent, children:[
        { path: 'house/:id', component: HouseComponent},
        { path: 'land/:id', component: LandComponent},
        ]},
    ]},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];


@NgModule({
    imports:[ RouterModule.forRoot(appRoutes) ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{

}