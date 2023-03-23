export class Artist {
    public id: number | undefined;
    public name: string | undefined;
    public description: string | undefined;
    public shortDescription: string | undefined;
    public pressPic: string | undefined;
    public spotifyPlaylist: string | undefined;
    public youtubeLink: string | undefined;
    public urlName: string | undefined;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}