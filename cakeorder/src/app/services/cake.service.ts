import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CakesService {
url='https://the-birthday-cake-db.p.rapidapi.com/';
header =  new HttpHeaders({
  'X-RapidAPI-Key': '9c468f71admsh53e9e780cbcb74bp136398jsn675cc9300f2e',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
});
constructor(private http: HttpClient){

} 
   getCakes(){
        return this.http.get(this.url,{headers:this.header});
   }
   getCakeById(id)
   {
        return this.http.get(this.url+id,{headers:this.header});
   }
    

}
