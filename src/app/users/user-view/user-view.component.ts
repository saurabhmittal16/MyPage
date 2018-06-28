import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../shared/user.model';
import { UserService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit, OnDestroy {
  uid: string;
  currentUser: User;
  activeUser: User = null;
  activeUserSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.uid = params['id'];
        console.log(this.uid);
        this.currentUser = this.userService.getUserByUID(this.uid);
        console.log(this.currentUser);
      }
    );
    this.activeUser = this.auth.currentUser;
    console.log(this.activeUser);
  }

  onAddFriend() {
    this.userService.addRequest(this.activeUser.uid, this.currentUser.uid);
    this.onReload();
  }

  onAcceptRequest(request: string, index: number) {
    this.userService.addFriend(request, index, this.activeUser.uid);
    this.onReload();
  }

  getUserName(uid: string) {
    return this.userService.getUserNameByUID(uid);
  }

  displayBtn() {
    if (
        this.currentUser.uid !== this.activeUser.uid &&
        !this.activeUser.friends.includes(this.currentUser.uid) &&
        !this.activeUser.requests.includes(this.currentUser.uid)
      ) {
      return true;
    }
    return false;
  }

  onReload() {
    this.userService.getData();
    this.currentUser = this.userService.getUserByUID(this.uid);
  }

  toggleCollapse(div: HTMLDivElement) {
    if (div.classList.length === 1) {
      div.classList.add('show');
    } else {
      div.classList.remove('show');
    }
  }
  ngOnDestroy() {
    // this.activeUserSub.unsubscribe();
  }
}
