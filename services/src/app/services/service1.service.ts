import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
age ; 
showAge;
  constructor(private http:HttpClient) { }
  public print()
  {
    alert("Hello World...!");
  }
  ageCalculator(age: any) {
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge = Math.floor(timeDiff/(1000*3600*24)/ 365);
    }
  }
  getData(): Observable<any>
  {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
