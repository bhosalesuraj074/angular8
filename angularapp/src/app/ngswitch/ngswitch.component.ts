import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectValue:string;
  constructor() { }

  ngOnInit() {
  }
  getSelected(event)
  {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

}
