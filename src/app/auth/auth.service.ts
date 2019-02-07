import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../users/users.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: User = null;
    user: firebase.User = null;
    userChanged = new Subject<User>();

    constructor(public afAuth: AngularFireAuth, private router: Router, private userService: UserService) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.currentUser = this.userService.getUserByUID(this.user.uid);
                this.userChanged.next(this.currentUser);
                this.router.navigate(['/users', this.user.uid]);
            } else {
                localStorage.setItem('user', null);
            }
        });
    }

    onSignUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => 1)
            .catch(error => error.message);
    }

    async onSignIn(email: string, password: string) {
        try {
            const data = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.user = await this.afAuth.auth.currentUser;
            this.currentUser = this.userService.getUserByUID(this.user.uid);
            this.userChanged.next(this.currentUser);
            return data;
        } catch (error) {
            return error.message;
        }
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
