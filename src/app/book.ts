import { Guid } from "guid-typescript";

export class Book {
    constructor() { }

    public id: string;
    public title: string;
    public authors: string;
    public year: Number;
    public img: string;

    defultImg() {
        this.img = "http://culture.affinitymagazine.us/wp-content/uploads/2017/05/635873821517718970351055939_Stack-of-books-great-education.jpg";
    }
    getGuidId(obj) {
        return obj.value
    }
    initializeId() {
        this.id = this.getGuidId(Guid.create());
        this.defultImg()
    }
    edit(data) {
        this.title = data.title;
        this.authors = data.authors;
        this.year = data.year;
        if (data.img) {
            this.img = data.img
        }
    }
}