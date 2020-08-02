import { Component, OnInit } from '@angular/core';
import { ExpierenceService } from '../experience.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Expierence } from '../experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  constructor(private expierenceService:ExpierenceService) { }

  expierence:Expierence =new Expierence();
  submitted=false;

  ngOnInit(): void {
  }

  expierenceSaveform=new FormGroup({  
    previous_comapny:new FormControl('' , [Validators.required ]),  
    technologies:new FormControl('' , [Validators.required ]),  
    doj:new FormControl('' , [Validators.required]),
    doe:new FormControl('',[Validators.required]),
    experience:new FormControl('',[Validators.required])
  });  

  saveExpierence(saveExpierence){
      console.log('Hello')
    this.expierence=new Expierence();     
    this.expierence.previous_comapny=this.PreviousComapny.value; 
    this.expierence.technologies=this.Technologies.value;  
    this.expierence.doj=this.Doj.value;  
    this.expierence.doe=this.Doe.value;
    this.expierence.experience=this.Expierence.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.expierenceService.createExperience(this.expierence)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.expierence = new Expierence();  
  }
  get PreviousComapny(){  
    return this.expierenceSaveform.get('previous_comapny');  
  } 
  
  get Technologies(){  
    return this.expierenceSaveform.get('technologies');  
  }  
  
  get Doj(){  
    return this.expierenceSaveform.get('doe');  
  }  

  
  get Doe(){  
    return this.expierenceSaveform.get('doe');  
  }  
  
  get Expierence(){  
    return this.expierenceSaveform.get('experience');  
  }  
  

}
