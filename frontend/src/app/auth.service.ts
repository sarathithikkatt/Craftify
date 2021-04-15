import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user:any){
  return this.http.post("http://localhost:4000/login",user)
  .subscribe((data)=>{
    console.log("success")
  })
}
  constructor(private http:HttpClient) { }
}
