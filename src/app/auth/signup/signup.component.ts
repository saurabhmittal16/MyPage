import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    this.auth.onSignUp(form.value.email, form.value.password)
      .then(data => {
        if (data === 1) {
          this.errorMessage = '';
          this.router.navigate(['/users', 'new']);
        } else {
          this.errorMessage = data;
        }
      });
  }
}
