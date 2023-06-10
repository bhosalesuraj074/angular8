import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
  providers:[Service1Service]
})
export class Service1Component implements OnInit {

  constructor(private myService:Service1Service, private post: PostService) { }
  age;
  showAge;
  
  //servicePrint :Service1Service;
  ngOnInit() {
     this.post.getPost().subscribe(post=>{
      console.log('Taking the data');
      
      console.log(post);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log('Completed');
        
      })

      this.post.getPostById(12).subscribe(val=> {
        console.log(val);
      })
     this.createPost();
      this.updatePost();

     this.deletePostById();
  }
  print(){
    console.log("in service");
       
       this.myService.print();
  }
  ageCalculator() {
    this.showAge = this.myService.ageCalculator(this.age)
   }
   getJsonData() {
          this.myService.getData().subscribe((res => {
            console.log('user res', res)
          }), (error: any) => {
            console.log('error occured', error)
          },
          () => console.log('completed'));    

          // ****** Second type ******
          // this.myService.GetUsers().subscribe(res => {
          //   console.log('getting data from NgFor comp', res)
          // })

          // let obs =new Observable((observer)=>
          // {
          //   console.log("Observal started");
            
          //    observer.next(1);
          //    observer.next(2);
          //    observer.next(3);
          //    observer.error('error occurred');
          //    observer.next(4);
          //    observer.next(5);
          // });

          // obs.subscribe(res => console.log(res));
          
   }
   
   updatePost() {
    let data = {
      id: new Date().getTime(),
      title: 'This is updated title'
    }
    this.post.UpdatePostById(1, data).subscribe(res => {
      console.log('data updated successfully', res);
    })
  }

  createPost() {
    let body = {
      id: new Date().getTime(),
      title: 'This is new post',
      body: 'This is the test post method of httpclient'
    }
    this.post.CreatePost(body).subscribe(res => {
      console.log('Poste created successfully', res);
    })
  }
  deletePostById() {
    let a= this.post.DeletePostById(1).subscribe(res => {
      console.log('post deleted successfully', res);
    })
  }
}
