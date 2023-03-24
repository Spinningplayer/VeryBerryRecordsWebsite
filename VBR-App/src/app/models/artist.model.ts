import { Show } from "./show.model";

export class Artist {
    public id: number | undefined;
    public name: string | undefined;
    public description: string | undefined;
    public shortDescription: string | undefined;
    public pressPic: string | undefined;
    public spotifyPlaylist: string | undefined;
    public youtubeLink: string | undefined;
    public instagramLink: string | undefined;
    public facebookLink: string | undefined;
    public driveLink: string | undefined;
    public urlName: string | undefined;
    public shows!: Show[];

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}