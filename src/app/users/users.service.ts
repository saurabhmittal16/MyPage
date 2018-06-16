import { User } from '../shared/user.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor(private http: Http) {}

    getUsers() {
        return this.users.slice();
    }

    setUsers(users: User[]) {
        this.users = users;
    }

    createUser(a, f, l, c, s, g, u, i) {
        const tempUser = new User(a, f, l, c, s, g, u, i, [], []);
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

    getUserNameByUID(uid: string) {
        const user = this.users.find(
            (temp: User) => {
                return temp.uid === uid;
            }
        );
        return `${user.fname} ${user.lname}`;
    }

    addRequest(sender: string, receiver: string) {
        const user = this.getUserByUID(receiver);
        if (!user.requests.includes(sender)) {
            user.requests.push(sender);
            this.putData();
        }
    }

    addFriend(request: string, requestIndex: number, acceptor: string) {
        const acceptingUser = this.getUserByUID(acceptor);
        const senderUser = this.getUserByUID(request);

        if (!(acceptingUser.friends.includes(request) || senderUser.friends.includes(acceptor))) {
            acceptingUser.friends.push(request);
            senderUser.friends.push(acceptor);
            acceptingUser.requests.splice(requestIndex, 1);
            this.putData();
        }

    }
    putData() {
        this.http.put('https://ng-project-d6217.firebaseio.com/users.json', this.users).subscribe(
            response => console.log(response)
        );
    }

    getData() {
        this.http.get('https://ng-project-d6217.firebaseio.com/users.json')
            .pipe(map(
                (response: Response) => {
                    const result = response.json();
                    for (const user of result) {
                        if (!user.requests) {
                            user.requests = [];
                        }
                        if (!user.friends) {
                            user.friends = [];
                        }
                    }
                    return result;
                }
            ))
            .subscribe(
                (data) => {
                    console.log(data);
                    if (data === null) {
                        data = [];
                    }
                    this.setUsers(data);
                }
            );
    }
}
