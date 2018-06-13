import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token = '';
    constructor(private router: Router) {}

    onSignUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => 1)
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
                    return data;
                }
            )
            .catch(error => error.message);
    }

    onSignOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    isAuthenticated() {
        if (this.token != null) {
            return true;
        }
        return false;
    }
}
