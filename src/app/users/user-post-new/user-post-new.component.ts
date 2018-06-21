import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-post-new',
  templateUrl: './user-post-new.component.html',
  styleUrls: ['./user-post-new.component.css']
})
export class UserPostNewComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  @Input() currentUser;
  uid: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    const date = new Date();
    this.userService.addPost(this.currentUser.uid, this.form.value['content'], String(date));
    this.form.reset();
  }
}
