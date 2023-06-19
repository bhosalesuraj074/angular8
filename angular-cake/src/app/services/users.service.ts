import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient){ }
  userURL = 'http://localhost:3000/users/';
  cart = 'http://localhost:3000/cart/';
  allUser:any=[]; 
  isValid=false;
  // for check user email & password
  checkUser(email, password){
   return this.http.get(this.userURL)
    
  }
 
  addToCart(item)
  {
      console.log('in addtocart user service');
      
      return this.http.post(this.cart,item);
  }

  getCarkItem(){
    return this.http.get(this.cart)
  }
  
  deleteItemById(id)
  {
    return this.http.delete(this.cart+id);
  }
}
