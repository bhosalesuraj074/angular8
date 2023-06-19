import { Component, Inject, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myDate:any='2022-2-15';
  myData:any=[];
  constructor(private taskService:TasksService, @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<EditComponent>){ }
  
  ngOnInit() {
    // console.log('data@@', this.data);
    this.myData = this.data.editData;
    let temp = new Date(this.data.editData.date);
    this.myDate  = (temp.getFullYear())+'-'+(this.editDate(temp.getMonth()+1))+'-'+(this.editDate(temp.getDate())); 
  }
  //this function is for the if date or month < 10 then then add 0 before the given date or month
  editDate(date){
    if (date<10) {
        return '0'+date;
    }
    return date;
  }
 // this event method execute after click on edit of the edit dialog 
  editData(editTask, editDate){
    this.myData.task = editTask;
    this.myData.date = editDate;
    this.taskService.updateTask(this.myData).subscribe(res=>{
      //console.log('***data Updated',res);
    })
    
  }

}
