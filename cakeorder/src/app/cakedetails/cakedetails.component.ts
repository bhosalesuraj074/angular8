import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakesService } from '../services/cake.service';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {

  cakeInfo :any;
  constructor(private route: ActivatedRoute, private cakeservice:CakesService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.cakeservice.getCakeById(id).subscribe(res=>{
      console.log("get cake by id: ",res);
      this.cakeInfo = res;
    })
   }

}
