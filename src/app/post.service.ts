import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mocked-messages';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]>{
  	return of(POSTS);
  }

}
