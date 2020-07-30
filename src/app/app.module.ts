import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomeComponent } from './home/home.component';
import { AlternativeContactsComponent } from './alternative-contacts/alternative-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    ExperienceDetailsComponent,
    HomeComponent,
    AlternativeContactsComponent
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
