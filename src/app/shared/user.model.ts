export class User {
    public fname: string;
    public lname: string;
    public age: number;
    public city: string;
    public state: string;
    public gender: string;
    public uid: string;
    public img: string;
    public requests: string[];
    public friends: string[];
    public posts: string[];

    constructor(a, f, l, c, s, g, u, i, r, friends, posts) {
        this.age = a;
        this.fname = f;
        this.lname = l;
        this.city = c;
        this.state = s;
        this.gender = g;
        this.uid = u;
        this.img = i;
        this.requests = r;
        this.friends = friends;
        this.posts = posts;
    }
}
