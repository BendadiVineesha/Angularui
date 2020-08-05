import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import {ActivatedRoute,Router} from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Reference } from './../reference';
@Component({
  selector: 'app-createreference',
  templateUrl: './createreference.component.html',
  styleUrls: ['./createreference.component.css']
})
export class CreatereferenceComponent implements OnInit {

  constructor(private applicationService:ApplicationService,
    private activateRoute:ActivatedRoute,
    private router:Router) { }

    onButtonClick():void{
      this.router.navigate(['/AlternativeContacts']);
    }

    reference:Reference =new Reference();
    submitted=false;
  ngOnInit(): void {
    this.submitted=false;
  }
  referencesaveform=new FormGroup({  
    reference_firstName:new FormControl('' , [Validators.required ]),  
    reference_lastName:new FormControl('' , [Validators.required ]),  
    reference_phoneNumber:new FormControl('' , [Validators.required , Validators.minLength(5),Validators.maxLength(10)]),
    reference_dob:new FormControl('',[Validators.required ]),
    reference_email:new FormControl('',[Validators.required ,Validators.email])

  });  

  saveReference(saveReference){  
    this.reference=new Reference();     
    this.reference.refFirstName=this.ReferenceFirstName.value; 
    this.reference.refLastName=this.ReferenceLastName.value;  
    this.reference.phoneNumber=this.ReferencePhone.value;  
    this.reference.dob=this.ReferenceDob.value;
    this.reference.email=this.ReferenceEmail.value;
    this.submitted = true;  
    this.save();  
  }  

  save() {  
    this.applicationService.createReference(this.reference).subscribe(data =>{
      console.log(data)
      this.onButtonClick();
    }) , (error =>{ 
      console.log(error)
    } );  
  }  
  get ReferenceFirstName(){  
    return this.referencesaveform.get('reference_firstName');  
  } 
  
  get ReferenceLastName(){  
    return this.referencesaveform.get('reference_lastName');  
  }  
  
  get ReferencePhone(){  
    return this.referencesaveform.get('reference_phoneNumber');  
  }  

  
  get ReferenceDob(){  
    return this.referencesaveform.get('reference_dob');  
  }  
 
  get ReferenceEmail(){
    return this.referencesaveform.get('reference_email');
  }
}
