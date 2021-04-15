import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http:HttpClient) { }

  newAccount(account:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.post<any>("http://localhost:4000/addaccount",account,{headers:httpHeaders});
  }

  // newAccount(account:any){
  //   return this.http.post("http://localhost:4000/addaccount",{"user":account})
  //   .subscribe(data=>{console.log(data)})
  // }

  searchAccount(email:any)
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/searchaccount/"+email,{headers:httpHeaders});
  }
}
