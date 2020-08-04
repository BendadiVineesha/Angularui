import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Employee } from '../employee';
import { Observable } from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   employees:Employee =new Employee();
  constructor(private applicationService:ApplicationService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
     this.applicationService.getEmployeesList().subscribe(data =>{
      console.log(data)
    }) , (error =>{ 
      console.log(error)
    } );  
  }
  deleteEmployee(id: number) {
    this.applicationService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
