import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Comment } from '../models';
import * as _ from 'lodash';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  @Input()SimpleView: string;
  @Input()PostId: number;
  Comments: Array<Comment>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.GetComments();
  }

  public GetComments(){
    this.postsService.GetCommentsByPost(this.PostId).subscribe(commetns => {
      var ordered = _.orderBy(commetns, ['id'], ['desc']);
        this.Comments = this.SimpleView.toLowerCase() == "true" ? _.take(ordered, 2) : ordered;
    });
  }

}
