import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyledirective',
  templateUrl: './ngstyledirective.component.html',
  styleUrls: ['./ngstyledirective.component.css']
})
export class NgstyledirectiveComponent implements OnInit {

  colorName= 'blue';
  isChecked:boolean=false;
  constructor() { }

  ngOnInit() {
    
  }

 
  people:any[] = [
    {
      "name": 'Jack',
      "country": 'UK'
    },
    {
      "name": 'Sumit',
      "country": 'USA'
    },
    {
      "name": 'Anup',
      "country": 'HK'
    },
    {
      "name": 'codemind',
      "country": 'UK'
    },
    {
      "name": 'surya',
      "country": 'USA'
    },
    {
      "name": 'Rocky',
      "country": 'HK'
    }
  ]

courses :any[] =[
  {
    "courseName":'Java'
  },
  {
    "courseName":'Angular'
  },
  {
    "courseName":'React'
  }]
}
