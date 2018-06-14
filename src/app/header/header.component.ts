import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.userChanged.subscribe(
      (data) => {
        if (data === null) {
          this.currentUser = null;
        }
        this.currentUser = data;
      }
  }

  onSignout() {
    this.auth.onSignOut();
  }
}
