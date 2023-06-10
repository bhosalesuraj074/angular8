import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  pass1:string="";
  hide = true;
  rehide =true;
  myUser:FormGroup;
  cc:any="";
  ngOnInit() {
    
  }
   genders = [
    {value:'Male'},
    {value:'Female'}
   ];
  countries = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "Canada", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Australia", code: "+61" },
    { name: "China", code: "+86" },
    { name: "Brazil", code: "+55" },
    { name: "Mexico", code: "+52" }
  ];
  
  setCountry(){
    let a=this.myUser.get('userDetails.contact.country').value;
   
   let code= this.countries.find((country)=>{
      if(country.name == a)
      {
        return country.code;
      }
    })
    this.myUser.patchValue({
      'userDetails':{
        'contact':{
                  'phone':code.code+"-"
        }
      }
    });
    
    
  }
  constructor() { 
         this.createUser();
  }
  createUser()
  {
    this.myUser = new FormGroup({
      //userdetails
    'userDetails': new FormGroup({
       'fullname' : new FormControl('', Validators.required),

       'birthday' : new FormControl(),

       'gender' : new FormControl(),

       'contact' : new FormGroup({
            'country': new FormControl(''),
            'phone':new FormControl('')
       }),
       'bio':new FormControl(''),
    }),// end of the user details
     // Account Details
     'accountDetails':new FormGroup({
      'username':new FormControl('',[Validators.required, this.validateFormat.bind(this)]),
      'email':new FormControl('',[Validators.required,this.isValidEmail.bind(this)]),
      'password': new FormControl( '', [Validators.required, this.isValidPassword.bind(this)]),
      'repassword' : new FormControl('',[Validators.required, this.checkPassword.bind(this,'password')]),
      'terms':new FormControl()
     })  
    });  }  


    OnSubmit()
    {
      console.log(this.myUser);
    }
// for the user validation 
 validateFormat(userInput:FormControl ){
       let pattern =/^[a-zA-Z][a-zA-Z\d]*$/;
       let numFormat = /^\d/;
       if(userInput.value.length == 0)
       {
        return {'required':true};
       }
       if(numFormat.test(userInput.value))
       {
        return {'StartWithNumber':true}
       }
       if(userInput.value.length < 5)
       {
        return {'LengthNotValid':true};
       }
       if(!pattern.test(userInput.value))
       {
        return {'FormatNotValid':true}
       }
       return false;
    }

    // for email validation 
    isValidEmail(email  : FormControl)
    {
      let emailPattern = /^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/;
      if(email.value.length <= 0)
      {
        return {'required':true}
      }
      if (!emailPattern.test(email.value)) {
        return {'EmailNotValid':true}
      }
      return null;
    }

    isValidPassword(pass :FormControl){
      let passPattern =/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
      
      if(pass.value.length <= 0)
      {
        return {'required':true}
      }
      if(passPattern.test(pass.value))
      {
        return {'InvalidPassword':true}
      }
      return null;
    }
    checkPassword(repass:FormControl, pass:FormControl){
      
      if(pass.value != repass.value)
      {
        return {'PasswordNotMatch':true}
      }
      return null;
    }
}
