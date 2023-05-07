import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  @Input()  childName: string;
  @Input()  count: string;
  
  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    console.log('from parent', this.childName);
    console.log('count', this.count);

  }
  SendToParent() {
    // custom event i.e fromChild
    this.fromChild.emit('Data is coming from child component');
}
}
