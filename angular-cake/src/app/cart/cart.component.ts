import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cakes :any =[];
  constructor(private user: UsersService){ }
  ngOnInit() {
     this.getItems();
  }
  
  getItems()
  {
    this.user.getCarkItem().subscribe(res=>{
      console.log('in cart=', res);
       this.cakes =res;
     })
    
  }
  remove(id){
    this.user.deleteItemById(id).subscribe(res=>{
      console.log('data delete');
      
    })
    this.getItems();
  }
   
}
