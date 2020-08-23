export default class Post {
    constructor(title, img) {
        this.title = title;
        this.ava = img;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            ava: this.ava,
            date: this.date.toJSON()
        }, null, 2)
    }

    // get uppercaseTitle() {
    //     return this.title.toUpperCase();
    // }
}