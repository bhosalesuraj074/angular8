import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name ='Suraj';
  imgNature = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' ;
  getName(){ 
    return 'Hello '+this.name;
  }
  // changeImage(e) 
  // {
  //   this.imgNature = e.target.value;
  //   console.log('catch $event', e);
  // }
  GetDataFromChild(data) {
    console.log('from child', data);
  }
  Uname:string = 'Suraj Bhosale ';
	userCount: string = '1000';
 
}
