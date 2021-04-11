import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    
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
