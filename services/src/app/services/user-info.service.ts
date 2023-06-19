import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  url = 'https://randomuser.me/api/';
  constructor(private http: HttpClient){
      
   }
  
   getUsers(){
    let param=new HttpParams();
    param = param.append('results','100');  
    return this.http.get(this.url,{params:param});  
   }
}
