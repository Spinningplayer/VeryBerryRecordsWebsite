export class User {
    public _id!: string;
    public name!: string;
    public authToken!: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}