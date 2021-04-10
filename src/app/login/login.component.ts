import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder){ }
  loginForm=this.fb.group(
    {
      email:['',Validators.required,Validators.pattern("^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      password:['',Validators.minLength(6),Validators.required]
    }
  );
  // constructor (){}

  ngOnInit(): void {
  }

  User={email:"",
        password:""};
  userVerify(){
    alert("Logged In");
  }
}
