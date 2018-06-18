import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() currentUser: User;
  posts: string[];

  constructor() { }

  ngOnInit() {
    this.posts = this.currentUser.posts;
  }

}
