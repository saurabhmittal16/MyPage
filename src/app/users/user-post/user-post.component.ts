import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() currentUser: User;
  @Input() activeUser: User;

  posts;

  constructor() { }

  ngOnInit() {
    this.posts = this.currentUser.posts;
  }

  isAllowed() {
    return this.currentUser.uid === this.activeUser.uid;
  }

  toggleCollapse(div: HTMLDivElement) {
    if (div.classList.length === 1) {
      div.classList.add('show');
    } else {
      div.classList.remove('show');
    }
  }
}
