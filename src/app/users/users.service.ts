import { User } from '../shared/user.model';

export class UserService {
    private users: User[] = [
        new User('s@m.com', '12345', 10, 'S', 'M', 'New Delhi', 'State', 'male'),
        new User('a@b.com', '12345', 11, 'A', 'B', 'New Delhi', 'State', 'female')
    ];

    createUser(e, p, a, f, l, c, s, g) {
        const tempUser = new User(e, p, a, f, l, c, s, g);
        this.users.push(tempUser);
        console.log(this.users);
    }
}
