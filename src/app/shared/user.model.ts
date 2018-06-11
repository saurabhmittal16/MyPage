export class User {
    private email: string;
    private password: string;
    private fname: string;
    private lname: string;
    private age: number;
    private city: string;
    private state: string;
    private gender: string;

    constructor(e, p, a, f, l, c, s, g) {
        this.email = e;
        this.password = p;
        this.age = a;
        this.fname = f;
        this.lname = l;
        this.city = c;
        this.state = s;
        this.gender = g;
    }
}
