import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { TasksService } from '../services/tasks.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 private allTasks;any =[];
  private selectedValue:string='null';
  constructor(public dialog: MatDialog, private taskService: TasksService, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.getAllTasks();
  }
  
  // this method is used for the add the new task 
  addTask(t,d){
     let obj={ task : t.value, date:d.value,status:false} 
     this.taskService.addTask(obj).subscribe(
      (value) => {
        //console.log(' Task Added:', value); 
      },
      (error) => {
        console.error('An error occurred:', error); 
      },
      () => {
        console.log('Transaction completed'); 
        this.getAllTasks();
        t.value='';
        d.value='';
        this.snacBar('Task added successfully !')
      }
     )
    } 
    
  // this method is used for the open
  openDialog(editData)
  {
    // console.log('***for open dialog',editData);
    let dialogRef= this.dialog.open(EditComponent,{
      data :{ editData }
    });
    dialogRef.afterClosed().subscribe(res=>{
    if(res)
       {
         this.snacBar('Task updated sussefully');   
        // this setTimeout() used because it excute quickly before change reflected in the server
        setTimeout(() => {
          this.getAllTasks();  
         }, 500);
       }
    })
  }

  // get all the task which added in the 
   getAllTasks(){
       this.taskService.getAllTasks().subscribe(
       res=>{ this.allTasks = res;
      // console.log('All task' ,  this.allTasks );
       })
   }
   
  // When we toggle the button for taking the action over where task is complete or not 
  onToggle(toggle,task){
  //this if for the when task mark complete 
      if(toggle.checked){
       task.status=true;
       this.taskService.updateTask(task).subscribe();
       this.snacBar('Hola! task completed 😎');
      }
      //this toggle for the when task mark as incomplete
      else{
       task.status=false;
       this.taskService.updateTask(task).subscribe(res=>{
       //console.log(res);
      })
      }
      // this setTimeout() used because it excute quickly before change reflected in the server
      setTimeout(() => {
      this.getAllTasks();  
      }, 500);
   }

    //this code is for  the snackbar 
    snacBar(msg){
       this.snackBar.open(msg, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'bottom',
              duration: 3 * 1000 });
    }
   
   
    
    
}
