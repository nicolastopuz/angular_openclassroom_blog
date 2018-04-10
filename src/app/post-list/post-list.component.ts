import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	
  posts : Post[];

  constructor(private postService : PostService) {}

  ngOnInit() {
  	this.getPosts();
  }

  getPosts():void{
  	this.postService.getPosts()
  		.subscribe(posts => this.posts=posts);
  }

}
