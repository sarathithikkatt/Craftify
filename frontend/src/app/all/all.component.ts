import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  
  posts = [{
    postname : '',
    description : '',
    image : '',
    category : '',
  }]

  constructor(private postservice:PostService,private router:Router) { }

  ngOnInit(): void {
    this.postservice.getPost().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
  })
}
}
