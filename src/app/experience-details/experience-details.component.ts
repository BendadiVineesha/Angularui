import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Expierence } from '../experience';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  constructor(private applicationService:ApplicationService,
              private activateRoute:ActivatedRoute,
              private router:Router){}

onButtonClick():void{
this.router.navigate(['/Reference']);
}
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
    this.applicationService.createExperience(this.expierence)  
      .subscribe(data =>{
        console.log(data)
        this.onButtonClick();
   }, error => {
     console.log(error)
    });  
  }
  get PreviousComapny(){  
    return this.expierenceSaveform.get('previous_comapny');  
  } 
  
  get Technologies(){  
    return this.expierenceSaveform.get('technologies');  
  }  
  
  get Doj(){  
    return this.expierenceSaveform.get('doj');  
  }  

  
  get Doe(){  
    return this.expierenceSaveform.get('doe');  
  }  
  
  get Expierence(){  
    return this.expierenceSaveform.get('experience');  
  }  
  

}
