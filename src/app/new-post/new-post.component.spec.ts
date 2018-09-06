import { AppRoutingModule } from './../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostComponent } from './new-post.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostComponent } from '../post/post.component';
import { PostpreviewComponent } from '../post-preview/post-preview.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { PostCommentsComponent } from '../post-comments/post-comments.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewpostComponent', () => {
  let component: NewpostComponent;
  let fixture: ComponentFixture<NewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewpostComponent,
        PostsListComponent,
        PostComponent,
        PostpreviewComponent,
        NewCommentComponent,
        PostCommentsComponent
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
    fixture = TestBed.createComponent(NewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
