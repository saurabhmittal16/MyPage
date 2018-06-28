import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../users/users.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: User = null;
    userChanged = new Subject<User>();

    constructor(private router: Router, private userService: UserService) {}

    onSignUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => 1)
            .catch(error => error.message);
    }

    onSignIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    this.currentUser = this.userService.getUserByUID(firebase.auth().currentUser.uid);
                    this.userChanged.next(this.currentUser);
                    return data;
                }
            )
            .catch(error => error.message);
    }

    onSignOut() {
        firebase.auth().signOut();
        this.currentUser = null;
        this.userChanged.next(null);
        this.router.navigate(['/']);
    }

    afterRegistered() {
        this.currentUser = this.userService.getUserByUID(firebase.auth().currentUser.uid);
        this.userChanged.next(this.currentUser);
    }

    isAuthenticated() {
        if (this.currentUser) {
            return true;
        }
        return false;
    }
}
