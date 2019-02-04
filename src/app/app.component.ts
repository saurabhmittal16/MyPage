import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { key } from './shared/firebase';
import { UserService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
    firebase.initializeApp(key);
    this.userService.getData();
  }
}
