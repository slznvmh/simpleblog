import { Post } from './../models/post';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpreviewComponent } from './post-preview.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { NewpostComponent } from '../new-post/new-post.component';
import { PostComponent } from '../post/post.component';
import { PostCommentsComponent } from '../post-comments/post-comments.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';

describe('PostpreviewComponent', () => {
  let component: PostpreviewComponent;
  let fixture: ComponentFixture<PostpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostpreviewComponent,
        PostsListComponent,
        NewpostComponent,
        PostComponent,
        PostCommentsComponent,
        NewCommentComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpreviewComponent);
    component = fixture.componentInstance;
    component.Post = <Post>{id: 1};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
