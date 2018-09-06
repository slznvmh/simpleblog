import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { PostpreviewComponent } from './../post-preview/post-preview.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { NewpostComponent } from '../new-post/new-post.component';
import { PostComponent } from '../post/post.component';
import { PostCommentsComponent } from '../post-comments/post-comments.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';

describe('PostslistComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostsListComponent,
        PostpreviewComponent,
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
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
