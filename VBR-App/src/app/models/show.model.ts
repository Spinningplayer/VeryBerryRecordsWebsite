export class Show {
    public id!: number;
    public venue!: string;
    public date!: Date;
    public city!: string;
    public artistID!: number;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}