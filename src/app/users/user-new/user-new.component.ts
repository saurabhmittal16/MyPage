import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  @ViewChild('f') userForm: NgForm;

  constructor(private usersService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usersService.createUser(
      this.userForm.value.email,
      this.userForm.value.password,
      this.userForm.value.age,
      this.userForm.value.fname,
      this.userForm.value.lname,
      this.userForm.value.city,
      this.userForm.value.state,
      this.userForm.value.gender,
    );
    this.onClear();
  }
  onClear() {
    this.userForm.reset();
  }
}

