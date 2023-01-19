import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path : '', component:StudentComponent },
  { path : 'add', component:AddComponent },
  { path : 'get', component:GetComponent },
  { path : 'student', component:StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddComponent,GetComponent,StudentComponent]