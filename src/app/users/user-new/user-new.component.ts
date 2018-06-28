import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../users.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  uid: string;
  selected = '../assets/Solid_gray.png';
  @ViewChild('f') userForm: NgForm;
  paths = [
    '../assets/1.png',
    '../assets/2.png',
    '../assets/3.png',
    '../assets/5.png',
  ];

  constructor(private usersService: UserService, private router: Router, private auth: AuthService) { }

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
      this.uid,
      this.selected
    );
    this.onClear();
    this.auth.afterRegistered();
    this.router.navigate(['/users', this.uid]);
  }

  onClick(path: string) {
    this.selected = path;
  }

  onClear() {
    this.userForm.reset();
  }
}

