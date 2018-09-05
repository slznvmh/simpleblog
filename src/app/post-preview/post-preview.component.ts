import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models';

@Component({
  selector: 'app-postpreview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostpreviewComponent implements OnInit {

  @Input() Post: Post;

  constructor() { }

  ngOnInit() {
  }

}
