import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { AlternativeContactsComponent } from './alternative-contacts/alternative-contacts.component';
import { CreatereferenceComponent } from './createreference/createreference.component';


const routes: Routes = [
  { path: '', redirectTo: '/EmployeeDetails', pathMatch: 'full' },
  {path : 'Employeelist',component:EmployeeListComponent},
  { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
  { path :'ExperienceDetails', component: ExperienceDetailsComponent},
  { path :'AlternativeContacts', component: AlternativeContactsComponent},
  { path :'Reference', component: CreatereferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
