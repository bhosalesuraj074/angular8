import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selected:string='';
  states:string[]=[];
  selectCountry:string='';
  constructor() { }
  ngOnInit() {
  }
  
  selectedCountry(event)
  {

    this.states.length=0;
    this.selected=event.target.value;
    console.log(this.selected);
    
    if( this.selected === 'india'){
      this.selectCountry=event.target.value;
       this.states.push("Maharashtra")
       this.states.push("Gujrat");
       this.states.push("MP");
       console.log(this.states);
       
    }
    if (this.selected == 'us') {
      this.selectCountry=event.target.value;
       this.states.push("California ")
       this.states.push("Texas ");
       this.states.push("New York");
    }
    if(this.selected == 'uk')
    {
      this.selectCountry=event.target.value;
       this.states.push("California ")
       this.states.push("Texas");
       this.states.push("New York"); 
    }
     
  }

}
