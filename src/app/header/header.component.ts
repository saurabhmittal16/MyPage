import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser;
  userChangeSubscription: Subscription;
  @ViewChild('nav') dropdown;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userChangeSubscription = this.auth.userChanged.subscribe(
      (data) => {
        if (data === null) {
          this.currentUser = null;
        }
        this.currentUser = data;
      });
  }
  ngOnDestroy() {
    this.userChangeSubscription.unsubscribe();
  }

  onSignout() {
    this.auth.onSignOut();
  }

  toggleNav() {
    const div = this.dropdown.nativeElement;
    if (div.classList.length === 2) {
      div.classList.add('show');
    } else {
      div.classList.remove('show');
    }
  }
}
