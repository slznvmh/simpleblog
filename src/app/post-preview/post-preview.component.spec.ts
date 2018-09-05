import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpreviewComponent } from './post-preview.component';

describe('PostpreviewComponent', () => {
  let component: PostpreviewComponent;
  let fixture: ComponentFixture<PostpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
