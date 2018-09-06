import { PostpreviewComponent } from './../post-preview/post-preview.component';
import { NewpostComponent } from './../new-post/new-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCommentsComponent } from './../post-comments/post-comments.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostComponent,
        NewCommentComponent,
        PostCommentsComponent,
        PostsListComponent,
        NewpostComponent,
        PostpreviewComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
