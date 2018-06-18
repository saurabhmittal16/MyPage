export class Post {
    private content: string;
    private createdBy: string;

    constructor(c: string, cb: string) {
        this.content = c;
        this.createdBy = cb;
    }
}
