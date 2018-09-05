import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private _mainCommentsUrl: string = "https://jsonplaceholder.typicode.com/comments/";

  constructor(private http: HttpClient) { }

  public PostComment<Comment>(comment: Comment){
    return this.http.post<Comment>(this._mainCommentsUrl, comment);
  }
}
