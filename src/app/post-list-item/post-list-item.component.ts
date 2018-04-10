import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

  positive():void{
  	this.post.loveIts+=1;
  	this.post.plus+=1;
  }

  negative():void{
  	this.post.loveIts-=1;
  	this.post.minus+=1;
  }

  getColor():string{
  	if (this.post.loveIts<0){
  		return "rgb(255,0,0,0.3)";
  	} else if (this.post.loveIts>0) {
  		return "rgb(0,255,0,0.3)";
  	} else {
  		return "white";
  }

}
