import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./landing_page/home.component";
import { PersonsInputComponent } from "./persons/persons-input.component";

const routes: Routes = [
    { path: '' ,  component: HomeComponent },
    { path: 'input' , component: PersonsInputComponent }
]; 

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]  //we export this after coz it has been deconstructed
})
export class AppRoutingModule{}