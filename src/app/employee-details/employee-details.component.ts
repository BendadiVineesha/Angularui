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
    employee_email:new FormControl('')
  });  

  saveEmployee(saveEmployee){  
    console.log('first')
    this.employee=new Employee();     
    this.employee.firstName=this.EmployeeFirstName.value; 
    this.employee.lastName=this.EmployeeLastName.value;  
    this.employee.phoneNumber=this.EmployeePhone.value;  
    this.employee.email=this.EmployeeEmail.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    console.log('second')
    this.employeeservice.createEmployee(this.employee).subscribe(data => console.log(data), error => console.log(error));  
      console.log('third')
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