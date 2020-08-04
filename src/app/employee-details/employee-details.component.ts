import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Employee } from './../employee'; 
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private applicationService:ApplicationService,
              private activateRoute:ActivatedRoute,
              private router:Router){}

  onButtonClick():void{
    this.router.navigate(['/ExperienceDetails']);
  }

  employee:Employee =new Employee();
  submitted=false;

  ngOnInit(): void {
    this.submitted=false;
  }
  employeesaveform=new FormGroup({  
    employee_firstName:new FormControl('' , [Validators.required ]),  
    employee_lastName:new FormControl('' , [Validators.required ]),  
    employee_phoneNumber:new FormControl('' , [Validators.required , Validators.minLength(5),Validators.maxLength(10)]),
    employee_dob:new FormControl('',)
  });  

  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.firstName=this.EmployeeFirstName.value; 
    this.employee.lastName=this.EmployeeLastName.value;  
    this.employee.phoneNumber=this.EmployeePhone.value;  
    this.employee.dob=this.EmployeeDob.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.applicationService.createEmployee(this.employee).subscribe(data =>{
      console.log(data)
      this.onButtonClick();
    }) , (error =>{ 
      console.log(error)
    } );  
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

  
  get EmployeeDob(){  
    return this.employeesaveform.get('employee_dob');  
  }  
  
}