import { Component } from '@angular/core';

@Component({
    selector:'app-parent',
    templateUrl :'./parent.component.html',
    styleUrls:['./parent.component.css']
})
export class ParentComponent 
{ 
    name:string= "Suraj Bhai Bolte mere ko";
    dataReceived(data)
    {
        console.log(data);
        
    }

}