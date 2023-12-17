import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector : 'app-reactive-form',
  templateUrl : './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = [
    { id : '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  
  isSubmitted: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'userDetails' : {
          'username' : 'Jack',
          'email': 'jack@gmail.com'
        },
        'course': 'HTML',
        'gender' : 'Female',
        'skills' : ['Azure']
      })
    }, 5000)
  }
  notAllowedNames = ['Codemind', 'Technology']; 
  createForm() {
    // this.myReactiveForm = new FormGroup({
    // 'userDetails' : new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this) ]) ,
    //     'email': new FormControl('',[Validators.required, Validators.email], this.NaEmails  ),
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray(
    //     [
    //       new FormControl('', Validators.required)
    //     ]
    //   )
    // })
    this.myReactiveForm = this.fb.group({
      userDetails: this.fb.group({
        username: ['',  [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
     })
  }

  OnSubmit() {
    this.isSubmitted = true;
    console.log('my reactive form ', this.myReactiveForm)
  }
  OnAddSkills(){
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
  }  

  NaNames(control: FormControl) {
  if(this.notAllowedNames.indexOf(control.value)  !== -1){
     return { 'namesNotAllowed': true }
    }return null;
  }
   // This method will validate the email fields 
  NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
}
