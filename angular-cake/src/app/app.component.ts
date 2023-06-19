import { Component , DoCheck } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'angular-cake';
  items:any = 0;
  arr: any =[];
  constructor(private user: UsersService){}
  
  ngDoCheck(): void {
     this.user.getCarkItem().subscribe(res=>{
       this.arr = res;
     })
     if(localStorage.getItem('email') != null)
     {
      this.items= this.arr.length;
     }
  }

}
