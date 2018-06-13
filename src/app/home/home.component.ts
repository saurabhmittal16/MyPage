import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private usersService: UserService) { }

  ngOnInit() {
    this.usersService.getData();
  }

  onRegister() {
    this.router.navigate(['/signup']);
  }

  onLogin() {
    this.router.navigate(['/signin']);
  }
}
