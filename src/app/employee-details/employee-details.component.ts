import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Employee } from './../employee'; 

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeservice:EmployeeService) { }

  employee:Employee =new Employee();
  submitted=false;

  ngOnInit(): void {
    this.submitted=false;
  }
  employeesaveform=new FormGroup({  
    employee_firstName:new FormControl('' , [Validators.required ]),  
    employee_lastName:new FormControl('' , [Validators.required ]),  
    employee_phoneNumber:new FormControl('' , [Validators.required , Validators.minLength(5) ]),
    employee_email:new FormControl('',[Validators.required,Validators.email])
  });  

  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.employee_firstName=this.EmployeeFirstName.value; 
    this.employee.employee_lastName=this.EmployeeLastName.value;  
    this.employee.employee_phoneNumber=this.EmployeePhone.value;  
    this.employee.employee_email=this.EmployeeEmail.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.employeeservice.createEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  
  get EmployeeFirstName(){  
    return this.employeesaveform.get('employee_firstName');  
  } 
  
  get EmployeeLastName(){  
    return this.employeesaveform.get('employee_lastName');  
  }  
  
  get EmployeePhone(){  
    return this.employeesaveform.get('employee_phoneNumber');  
  }  

  
  get EmployeeEmail(){  
    return this.employeesaveform.get('employee_email');  
  }  
  
}