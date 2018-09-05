import { Post } from '../models';
import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public CurrentPost: Post;

  constructor(private postService: PostsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.InitPost();
  }

  public InitPost(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.GetPost(id).subscribe(post => this.CurrentPost = post);
  }

}
