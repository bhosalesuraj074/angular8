import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url ='http://localhost:3000/tasks/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addTask(task){
      return this.http.post(this.url,task); 
  }

  // this method return the all the tasks from the server
  getAllTasks()
  {
    return this.http.get(this.url);
  }
 // this method return the a task specified by the id
  getTaskById(id)
  {
    return this.http.get(this.url+id);
  }
  updateTask(task){
    return   this.http.put(this.url+task.id,task, {headers:this.headers});
  }
}
