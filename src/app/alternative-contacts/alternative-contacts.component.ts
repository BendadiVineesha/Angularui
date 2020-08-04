import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { ApplicationService } from '../application.service';
import { Alternative } from '../alternative';

@Component({
  selector: 'app-alternative-contacts',
  templateUrl: './alternative-contacts.component.html',
  styleUrls: ['./alternative-contacts.component.css']
})
export class AlternativeContactsComponent implements OnInit {

  constructor(private applicationService:ApplicationService){}

  alternative:Alternative =new Alternative();
  submitted=false;

  ngOnInit(): void {
  }

  alternativesaveform=new FormGroup({  
    alternativeName:new FormControl('' , [Validators.required ]),  
    alternativeEmail:new FormControl('' , [Validators.required ,Validators.email]),  
    alternativeNum:new FormControl('' , [Validators.required , Validators.minLength(5),Validators.maxLength(10)])
  });

  saveAlternative(saveAlternative){  
    this.alternative=new Alternative();     
    this.alternative.alternativeName=this.EmployeeAlternativeName.value; 
    this.alternative.alternativeEmail=this.EmployeeEmail.value;  
    this.alternative.alternativeNum=this.EmployeeNum.value;  
    this.save();  
  }  
  save() {  
    this.applicationService.createAlternative(this.alternative).subscribe(data =>{
      console.log(data)
    }) , (error =>{ 
      console.log(error)
    } );  
  } 
  get EmployeeAlternativeName(){  
    return this.alternativesaveform.get('alternativeName');  
  } 
  
  get EmployeeEmail(){  
    return this.alternativesaveform.get('alternativeEmail');  
  }  
  
  get EmployeeNum(){  
    return this.alternativesaveform.get('alternativeNum');  
  }  
   
}
