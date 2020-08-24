import { Component, OnInit } from '@angular/core';
import { HISOfficer } from 'src/app/models/HISOfficer';
import { HisOfficersServiceService } from 'src/app/services/his-officers-service.service';
import { FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-officer',
  templateUrl: './create-officer.component.html',
  styleUrls: ['./create-officer.component.css']
})
export class CreateOfficerComponent implements OnInit {
  

  hisOfficerModel:HISOfficer=this.service.hisOfficerGetter();
  savedMessage:any;
  displaySuccessMsg:boolean;
  successMessage:string = "Sucessfully created new officer and he/she will receive an email regarding the access.";
  constructor(private fB: FormBuilder,private service : HisOfficersServiceService) { }
  ngOnInit(): void {
  }

  hisOfficerGroup: FormGroup = this.fB.group({
    oid:[this.hisOfficerModel.officerId],
    ftName: [this.hisOfficerModel.fname,[Validators.required]],
    ltName: [this.hisOfficerModel.lname,[Validators.required]],
    email: [this.hisOfficerModel.email, [Validators.required, Validators.email] , [this.uniqueEmailValidation()]],
    phoNo: [this.hisOfficerModel.phoneNo, [Validators.required]],
    dob: [this.hisOfficerModel.dob, [Validators.required]],
    gender:[this.hisOfficerModel.gender],
    role:[this.hisOfficerModel.role]
  });

  uniqueEmailValidation(): AsyncValidatorFn 
  {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>
     {
      return this.service.getOfficer(control.value)
                        .pipe( map (users => {return users!=null ? {'asyncValidation':true} : null;}) );
     }
  }

  onSubmit1(){
    let message = this.service.createOfficer(this.hisOfficerModel);
    message.subscribe((data)=>this.savedMessage=data);
    if (this.savedMessage=="Success") {
      this.displaySuccessMsg=true
     } 
    //else {
      
    // }
    
  }

}
