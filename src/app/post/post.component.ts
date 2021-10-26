import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() thepost: Post = {
    title: '',
    thought: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
