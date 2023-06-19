import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CakeService {
  url='https://the-birthday-cake-db.p.rapidapi.com/'; 
  // header =  new HttpHeaders({
  // 'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
	// 'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
  //  }); sending the data from the interceptor
  constructor(private http : HttpClient){

   }
   getCakes(){
    //return this.http.get(this.url,{headers:this.header});
    return this.http.get(this.url);
   }

   getCakeById(id)
   {
        // return this.http.get(this.url+id,{headers:this.header});
        return this.http.get(this.url+id);
   }
   
}
