import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './UserDetails';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  isSubmitted:boolean=false;
user:User;
  constructor() { }
  default='Angular';
  courseArr : string [] = [
    'Angular', 'HTML', 'JavaScript'
  ]
  ngOnInit() {
  }
  OnSubmit(form : NgForm) {
  //  console.log(form);
  console.log("After Form submitted");
  
  this.isSubmitted=true;
  this.user = new User();
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.course = form.value.course;
    this.user.gender =form.value.gender;
    console.log('After bind value to User Object', this.user);
    //console.log(form);
    form.reset();
  }
  defaultGender='male';
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
