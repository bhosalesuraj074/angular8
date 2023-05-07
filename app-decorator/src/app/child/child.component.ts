import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'app-child',
    templateUrl:'./child.component.html',
    styleUrls:[]
})
export class ChildComponent implements OnInit {

   @Input() childName:String ;
    ngOnInit(){
         console.log(this.childName);
    }
    @Output() sendData : EventEmitter<string> =new EventEmitter<string>();

    OnClickSend(){
        this.sendData.emit("Hello World from child ");
    }
 }