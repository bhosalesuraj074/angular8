import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   url= 'https://jsonplaceholder.typicode.com/posts';
   constructor(private Http: HttpClient) {
        
   }

   getPost()
   {
    return this.Http.get(this.url);
   }
   getPostById(id : number){
     return this.Http.get(this.url+'/'+id);
   }

   UpdatePostById(id: any, body: any) {
    return this.Http.put(this.url +'/'+ id, body);
   }
    
   CreatePost(body: any){
    return this.Http.post(this.url, body);
   }

   DeletePostById(id: any)  {
    return this.Http.delete(this.url+'/'+ id);
  }
}
