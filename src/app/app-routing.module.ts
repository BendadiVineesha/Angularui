import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { AlternativeContactsComponent } from './alternative-contacts/alternative-contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
  { path :'ExperienceDetails', component: ExperienceDetailsComponent},
  { path :'AlternativeContacts', component: AlternativeContactsComponent},
  { path :'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
