import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {

  cakeInfo :any;
  constructor(private route: ActivatedRoute, private cakeservice:CakeService, private user:UsersService) { }
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    //service call
    this.cakeservice.getCakeById(id).subscribe(res=>{
      console.log("get cake by id: ",res);
      this.cakeInfo = res;
    })
  }
   
  addToCart(id ,url, title){
   //console.log(id,url, title);
     let obj = {
                'id':id,
                'imgUrl':url,
                'title':title
              }
      console.log(obj);
       this.user.addToCart(obj).subscribe(res=>{
        console.log(res);
        
       })       
  }
}
