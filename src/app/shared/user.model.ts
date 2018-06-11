export class User {
    private fname: string;
    private lname: string;
    private age: number;
    private city: string;
    private state: string;
    private gender: string;
    private uid: string;

    constructor(a, f, l, c, s, g, u) {
        this.age = a;
        this.fname = f;
        this.lname = l;
        this.city = c;
        this.state = s;
        this.gender = g;
        this.uid = u;
    }
}
