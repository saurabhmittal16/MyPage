import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  search = '';
  users = [];

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
