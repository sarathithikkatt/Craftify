import { Component, OnInit } from '@angular/core';
import {AccountserviceService} from '../accountservice.service';
import {Router} from '@angular/router';
import { AccountModel } from './account.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private accountService:AccountserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  accountItem = {    
     fullname : '',
     userphone : '',
     email : '',
     password : '',
  }

  accountobj:any;

  addAccount()
  {
    // this.accountService.newAccount(this.accountItem)
    // console.log("Work aayi");
    // alert("Sucess");
    // var email = this.accountItem.email;
    this.accountService.newAccount(this.accountItem)
    .subscribe(data => {
      this.accountobj = data;
      alert(this.accountobj);
    });
    alert("A new account has been successfully created !! Don't forget you creds :)")
  }
}
