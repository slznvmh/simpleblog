import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { AlertsService} from '../services/alerts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewpostComponent implements OnInit {

  public NewPost: Post;

  constructor(private postService: PostsService, private router: Router, private alert: AlertsService) { }

  ngOnInit() {
    this.NewPost = <Post>{ userId: 1, title: '', body: '' };
  }

  public SavePost() {
    this.postService.AddPost(this.NewPost).subscribe(post => {
      this.alert.Add({
        type: 'success',
        msg: `Post: ${post.title} with Id: ${post.id} successfully created!`,
        timeout: 5000
      });
      this
      .router
      .navigateByUrl('/posts');
    });
  }
}
