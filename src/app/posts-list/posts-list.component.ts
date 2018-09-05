import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-postslist',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public Posts: Array<Post> = [];

  constructor(private postService: PostsService, @Inject(DOCUMENT)private document: Document) { }

  ngOnInit() {
    this.appendPosts();
  }

  private scrollEventElapsed: boolean = false;
  
  @HostListener("window:scroll", [])
  onWindowsScroll() {
    let windowOffset = window.innerHeight + window.scrollY;

    if(windowOffset >= this.document.body.offsetHeight && !this.scrollEventElapsed){
      this.scrollEventElapsed = true;
      this.appendPosts();
    }else if(windowOffset < this.document.body.offsetHeight && this.scrollEventElapsed){
      this.scrollEventElapsed = false;
    }
  }

  private appendPosts(): void {
    this.postService
      .GetPosts(this.Posts ? this.Posts.length : 0, 5)
      .subscribe(posts => {
        console.log("data fetched");
        posts.forEach(post => this.Posts.push(post));
      });
  }

}
