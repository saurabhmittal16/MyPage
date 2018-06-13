import { User } from '../shared/user.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor(private http: Http) {}

    getUsers() {
        return this.users.slice();
    }

    setUsers(users: User[]) {
        if (!users) {
            this.users = [];
        }
        this.users = users;
    }

    createUser(a, f, l, c, s, g, u) {
        const tempUser = new User(a, f, l, c, s, g, u);
        this.users.push(tempUser);
        console.log(this.users);
        this.putData();
    }

    getUserByUID(uid: string) {
        const user = this.users.find(
            (temp: User) => {
                return temp.uid === uid;
            }
        );
        return user;
    }

    putData() {
        this.http.put('https://ng-project-d6217.firebaseio.com/users.json', this.users).subscribe(
            response => console.log(response)
        );
    }

    getData() {
        this.http.get('https://ng-project-d6217.firebaseio.com/users.json')
            .pipe(map(
                (response: Response) => response.json()
            ))
            .subscribe(
                (data) => {
                    this.setUsers(data);
                }
            );
    }
}
