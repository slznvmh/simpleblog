import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post, Comment } from '../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _mainPostsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  public GetPosts(start?: number, limit?: number): Observable<Array<Post>> {
    let url = this._mainPostsUrl;
    if (limit) {
      // HttpParams почему то не работают, видимо мешает знак "_" перед каждым параметром
      // делаем по колхозному
      url = `${url}?_start=${start}&_limit=${limit}`;
    }

    return this.http.get<Array<Post>>(url);
  }

  public GetPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this._mainPostsUrl}/${id}`);
  }

  public AddPost(post: Post) {
    return this.http.post<Post>(this._mainPostsUrl, post);
  }

  public GetCommentsByPost(postId: number): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${this._mainPostsUrl}/${postId}/comments`)
  }
}
