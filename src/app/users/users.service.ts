import { User } from '../shared/user.model';

export class UserService {
    private users: User[] = [];

    createUser(a, f, l, c, s, g, u) {
        const tempUser = new User(a, f, l, c, s, g, u);
        this.users.push(tempUser);
        console.log(this.users);
    }

    getUserByUID(uid: string) {
        const user = this.users.find(
            (temp: User) => {
                return temp.uid === uid;
            }
        );
        return user;
    }
}
