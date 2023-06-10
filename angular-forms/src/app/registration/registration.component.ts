import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { register } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
last:string ="";
first:string="";
Age:number;
phoneNumber:number;
pass1:string="";
pass2:string="";
reg:register;
registerDetails(form: NgForm)
{
     this.reg =new register();
     this.reg.username = form.controls.fname.value + " " +form.controls.lname.value ;
     console.log(this.reg.username);
     
     this.reg.age = form.controls.age.value;
     this.reg.email= form.controls.email.value;
     this.reg.phone = form.controls.phone.value;
     this.reg.gender = form.controls.gender.value;
     //this.reg.password = form.controls.pass1.value;
     console.log(form);
     form.reset();
     
    
    

     
}

isValid:boolean=false;
vld:boolean=false;
emailOnChange(form :NgForm){
  let email = form.controls['email'].value;
  console.log(email);
  if(!email.endsWith('codemind.com') || (()=>{
  
         for (let i= 0; i <= 9; i++) {
           if(i+"" == email.charAt(0))
                  this.vld =true;    
        }
   // console.log("in function",vld);
   return this.vld;
  })())
  {
          this.isValid =true;
          console.log("You Enter the invalid email");         
  }
  else{
    this.isValid = false;
    console.log("Email is valid");
  }
   this.isValid;
}
}
