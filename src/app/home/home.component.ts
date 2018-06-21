import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/users.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  onRegister() {
    this.router.navigate(['/signup']);
  }

  onLogin() {
    this.router.navigate(['/signin']);
  }
}
