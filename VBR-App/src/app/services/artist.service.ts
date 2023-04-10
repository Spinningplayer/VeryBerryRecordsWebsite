import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Artist } from '../models/artist.model';
import {env} from '../environments/env';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  private headers = new HttpHeaders({'content-type': 'application/json'})
  private url = env.serverUrl + '/artists/';
  

  public selectedArtist: Artist | undefined;

  public artists: Artist[] = [{
      _id: "",
      name: "Jay Marten & The Early Birds",
      description: "Jay Marten (27) is een talentvolle singer/songwriter en performer die samen met zijn liveband vibrerende rock met een hedendaagse kijk op het leven maakt. Geïnspireerd door bands zoals Steppenwolf, The Doobie Brothers, Led Zeppelin en Creedence Clearwater Revival schrijft en neemt Jay Marten songs op in zijn home-studio. De psychedelische touch en vibrerende grooves laten je voelen alsof je meegenomen wordt op een roadtrip in een auto met verchroomde bumpers, lange flared jeans, 8-track tapes en de liefde van je leven naast je terwijl je de zakkende zomer zon tegemoet rijdt.",
      shortDescription: "70's Hard Rock with funk and disco influences!",
      spotifyPlaylist: "https://open.spotify.com/embed/artist/7kwkDFTlg0KWIAbjATPtpN?utm_source=generator&theme=0",
      youtubeLink:"https://www.youtube.com/embed/60eYRBVmgpM",
      instagramLink: "https://www.instagram.com/jay_martenmusic/",
      facebookLink: "https://www.facebook.com/jaymartenmusic/",
      driveLink: "https://drive.google.com/drive/folders/1ynDVP-pcPzo5OZkyJH5NQRXAbFsA0WH-?usp=sharing",
      pressPic:"../../../assets/Jay Marten/PressPic.jpg",
      urlName: "jaymarten",
      spotifyId: "",
      shows: [
        {id: 0,
        venue: "Mezz Breda",
        date: new Date("06-05-2022"),
        city: "Breda",
        artistID: "",
        artistName: "Jay Marten",
        expired: true,
        ticketLink: ""
      },
        {id: 1,
        venue: "Breda Barst",
        date: new Date("09-19-2022"),
        city: "Breda",
        artistID: "",
        artistName: "Jay Marten",
        expired: true,
        ticketLink: ""},
        {id: 2,
          venue: "Little Devil",
          date: new Date("02-10-2023"),
          city: "Tilburg",
          artistID: "",
          artistName: "Jay Marten",
          expired: true,
          ticketLink: ""}
      ]
    },
    {
      _id: "",
      name: "Ara",
      description: "Ara is een Tilburgse singer-songwriter van Armeense afkomst. Geïnspireerd door westerse en oosterse folk invloeden, combineert hij fingerstyle gitaar met meeslepende melodieën en poëtische teksten. Zijn sound is te vergelijken met Ben Howard, Hozier en Damien Rice. In 2021 vertrok Ara naar California om zijn eigen materiaal uit te testen als straatmuzikant. In de zomer van 2022 keerde hij terug en begon hij op Nederlandse podia te spelen. Met lokale aandacht van Omroep Tilburg, een Pophuis traject en coaching van o.a. Maarten van Damme (Racoon) begint Ara een impact te maken op een regionale muziekscene. Ara werkt momenteel aan zijn debuut EP: From Embers - Augustus 2023. ",
      shortDescription: "Western and eastern folk combined with poetic lyrics and soulfull melodies",
      spotifyPlaylist: "https://open.spotify.com/embed/artist/6YWZXgJnIkhmLN7GYX3sF4?utm_source=generator&theme=0",
      youtubeLink: "https://www.youtube.com/embed/un85CccavKs?t=9",
      instagramLink: "https://www.instagram.com/aramusic/",
      facebookLink: "https://www.facebook.com/AraSounds",
      driveLink: "https://drive.google.com/drive/folders/1AU3Bq8WYukNg6ZTRYa7TDmWrxSVjdbfj?usp=sharing",
      pressPic: "../../../assets/Ara/Ara-PressPic.png",
      urlName: "ara",
      spotifyId: "",
      shows: [
        {id: 11,
        venue: "Hall of Fame",
        date: new Date("02-04-2023"),
        city: "Tilburg",
        artistID: "",
        artistName: "Ara",
        expired: true,
        ticketLink: ""},
        {id: 12,
          venue: "Popei",
          date: new Date("03-18-2023"),
          city: "Eindhoven",
          artistID: "",
          artistName: "Ara",
          expired: true,
          ticketLink: ""}
      ]
    }]


  constructor(private http: HttpClient) { }

  public selectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }

  public getArtists() {
    return this.artists
  }

  // public getArtists() {
  //   return lastValueFrom(this.http.get(
  //     this.url,
  //     {headers: this.headers}))
  //     .then(response => {
  //       console.log(response)
  //       this.artists = response as Artist[];
  //       return response as Artist[]
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })
  // }

  // public async getArtist(id: number) {
  //   return await lastValueFrom(this.http.get(
  //     this.url + id,
  //     {headers: this.headers}))
  //     .then((artist) => {
  //       return artist.json() as Artist
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })
  // }

  // public async postArtist(artist: Artist) {
  //   return await lastValueFrom(this.http.post(
  //     this.url,
  //     JSON.stringify(artist),
  //     {headers: this.headers}))
  //     .then((artist) => {
  //       this.artists.add(artist)
  //       return artist
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })
  // }

  // public async deleteArtist(artist: Artist) {
  //   return await lastValueFrom(this.http.delete(
  //     this.url + artist._id,
  //     {headers: this.headers}))
  //     .then((id) => {
  //       this.artists.remove(artists)
  //       return id
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })
  // }

  // public async updateArtist(artist: Artist) {
  //   return await lastValueFrom(this.http.put(
  //     this.url + artist._id,
  //     JSON.stringify(artist),
  //     {headers: this.headers}))
  //     .then((artist) => {
  //       return artist.json() as Artist
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return null
  //     })
  // }
}

