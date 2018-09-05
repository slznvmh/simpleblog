import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostpreviewComponent } from './post-preview/post-preview.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { NewpostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostComponent } from './post/post.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PostpreviewComponent,
    PostsListComponent,
    NewpostComponent,
    PostCommentsComponent,
    PostComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
