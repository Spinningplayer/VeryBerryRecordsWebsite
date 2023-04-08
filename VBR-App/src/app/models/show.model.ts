export class Show {
    public id!: number;
    public venue!: string;
    public date!: Date;
    public city!: string;
    public artistID!: string;
    public artistName!: string;
    public expired!: boolean;
    public ticketLink!: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}