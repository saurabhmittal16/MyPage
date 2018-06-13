import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    this.auth.onSignIn(form.value.email, form.value.password)
      .then(data => {
        if (typeof(data) === 'string') {
          this.errorMessage = data;
        } else {
          this.errorMessage = 'Signing In';
          this.router.navigate(['/users', data.user['uid']);
        }
      });
  }
}
