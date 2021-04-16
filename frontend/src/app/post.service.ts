import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  //new post
  newPost(post:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.post<any>("http://localhost:4000/post",post,{headers:httpHeaders});
  }

  //get post
  getPost(){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:4000/feed",{headers:httpHeaders});
  }
}
