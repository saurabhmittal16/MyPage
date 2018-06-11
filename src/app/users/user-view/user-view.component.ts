import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  uid: string;
  currentUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['id'];
    this.currentUser = this.userService.getUserByUID(this.uid);

    this.route.params.subscribe(
      (params) => {
        this.uid = params['id'];
        this.currentUser = this.userService.getUserByUID(this.uid);
      }
    );
  }

}
