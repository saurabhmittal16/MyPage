import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../users/users.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    token = '';
    currentUser: User;
    userChanged = new Subject<User>();

    constructor(private router: Router, private userService: UserService) {}

    onSignUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token) => {
                                this.token = token;
                                console.log(token);
                            }
                        );
                    this.currentUser = this.userService.getUserByUID(firebase.auth().currentUser.uid);
                    this.userChanged.next(this.currentUser);
                    return 1;
                }
            )
            .catch(error => error.message);
    }

    onSignIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (data) => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token) => {
                                this.token = token;
                            }
                        );
                    this.currentUser = this.userService.getUserByUID(firebase.auth().currentUser.uid);
                    this.userChanged.next(this.currentUser);
                    return data;
                }
            )
            .catch(error => error.message);
    }

    onSignOut() {
        firebase.auth().signOut();
        this.token = null;
        this.userChanged.next(null);
        this.router.navigate(['/']);
    }

    isAuthenticated() {
        if (this.token != null) {
            return true;
        }
        return false;
    }
}
