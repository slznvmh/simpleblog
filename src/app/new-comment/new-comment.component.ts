import { CommentsService } from './../services/comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Input() PostId: number;
  Comments: Array<Comment>;
  NewComment: Comment;
  NewCommentFormVisible: boolean = false;

  constructor(private commentsService: CommentsService, private alert: AlertsService) { }

  ngOnInit() {
  }

  public SaveComment() {
    this.commentsService.PostComment(this.NewComment).subscribe(newComment => {
      this.alert.Add({
        type: 'success',
        msg: `Comment: ${newComment.name} with Id: ${newComment.id} successfully created!`,
        timeout: 5000
      });
      this.ToggleNewCommentVisibility();
    });
  }

  public ToggleNewCommentVisibility() {
    this.NewComment = <Comment>{ name: '', postId: this.PostId, email: '', body: '' };
    this.NewCommentFormVisible = !this.NewCommentFormVisible;
  }
}
