import { Component, OnInit } from '@angular/core';
import { CakesService } from '../services/cake.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  cakes:any=[];
  constructor(private cake: CakesService) { }

  ngOnInit(){ 
    this.cake.getCakes().subscribe((res:any)=>{
        console.log(res);
        this.cakes=res;   
    })
  }


   
}
