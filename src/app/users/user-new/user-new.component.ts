import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../users.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  uid: string;
  @ViewChild('f') userForm: NgForm;

  constructor(private usersService: UserService, private router: Router) { }

  ngOnInit() {
    if (firebase.auth().currentUser) {
      this.uid = firebase.auth().currentUser.uid;
    } else {
      this.router.navigate(['/signup']);
    }
  }

  onSubmit() {
    this.usersService.createUser(
      this.userForm.value.age,
      this.userForm.value.fname,
      this.userForm.value.lname,
      this.userForm.value.city,
      this.userForm.value.state,
      this.userForm.value.gender,
      this.uid
    );
    this.onClear();
    this.router.navigate(['/users', this.uid]);
  }
  
  onClear() {
    this.userForm.reset();
  }
}

