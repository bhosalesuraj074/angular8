import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  colorName:string="";
  constructor() { }
   ngOnInit() {
   }

   cars:any[] = [1,2,3,4,5,6,7,8,9];
}
