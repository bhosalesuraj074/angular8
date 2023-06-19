import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup ;
  user:any=[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private userService: UsersService, private route : Router, private _snackBar: MatSnackBar) { }
  
  ngOnInit() {
   this.getForm();
  }
  getForm()
   {
         this.myForm =  new  FormGroup({
          'email': new   FormControl('',[Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required) 
         })
   }

   check(){
      let isValid =false;
       let email= this.myForm.get('email').value;
       let pass= this.myForm.get('password').value;
       this.userService.checkUser(email,pass).subscribe(res=>{
        this.user = res;
        this.printUser(this.user,email,pass)
       })
       
       
      }
   // fdgdgdggdf
      printUser(users,email,password){
        let count =0;
        for (const user of users) {
          if(user.email == email && user.password == password)
          {
            localStorage.setItem('email', email);
            localStorage.setItem('password',password);
            this.route.navigate(['cakes']); 
            count++;
          }
        }
        if(count==0)
        {
         this._snackBar.open('User does not exits', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 4 * 1000,
        });
      }
      }
}
