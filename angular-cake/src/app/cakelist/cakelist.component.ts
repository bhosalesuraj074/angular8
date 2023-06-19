import { Component, OnDestroy, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit, OnDestroy {
  cakes:any=[];
  subscriber : Subscription;
  
  constructor(private http : CakeService) { }
  
  ngOnInit() {
       this.subscriber= this.http.getCakes().subscribe(res=>{
       this.cakes = res;
       console.log(this.cakes);
    })
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
  
  this.subscriber.unsubscribe();
}
  

}
