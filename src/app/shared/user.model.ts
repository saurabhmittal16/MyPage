export class User {
    public fname: string;
    public lname: string;
    public age: number;
    public city: string;
    public state: string;
    public gender: string;
    public uid: string;

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
