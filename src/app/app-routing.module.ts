import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfficerComponent } from './components/create-officer/create-officer.component';
import { ViewOfficersComponent } from './components/view-officers/view-officers.component';


const routes: Routes = [
  {path:"c",component:CreateOfficerComponent},
  {path:"v",component:ViewOfficersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
