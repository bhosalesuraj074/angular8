import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users :any =[];
  constructor(private userInfo: UserInfoService) { }

  ngOnInit() {
    this.userInfo.getUsers().subscribe((res:any)=>{
      console.log('User responce', res);
      this.users= res.results;
    })
  }

}
