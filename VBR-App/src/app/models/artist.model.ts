import { Show } from "./show.model";

export class Artist {
    public _id!: string;
    public name!: string;
    public description!: string;
    public shortDescription!: string;
    public pressPic!: string;
    public spotifyPlaylist!: string;
    public youtubeLink!: string;
    public instagramLink!: string;
    public facebookLink!: string;
    public driveLink!: string;
    public urlName!: string;
    public shows!: Show[];
    public spotifyId!: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}