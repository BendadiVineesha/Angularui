import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { AlternativeContactsComponent } from './alternative-contacts/alternative-contacts.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreatereferenceComponent } from './createreference/createreference.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    ExperienceDetailsComponent,
    AlternativeContactsComponent,
    EmployeeListComponent,
    CreatereferenceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
