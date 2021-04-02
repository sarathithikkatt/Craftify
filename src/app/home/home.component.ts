import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'Craftify';
  isavailable=true;
  months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  name="You name";
  buttonClicked(){
    window.alert("Clicked");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
