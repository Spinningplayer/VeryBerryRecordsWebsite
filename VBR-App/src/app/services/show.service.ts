import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { env } from '../environments/env';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private headers = new HttpHeaders({'content-type': 'application/json'})
  private url = env.serverUrl + '/shows/';

  public selectedShow: Show | undefined;
  public shows: Show[] = [];
  // public shows: Show[] = [
  //   {
  //     id: 0,
  //     venue: "Mezz Breda",
  //     date: new Date("06-05-2022"),
  //     city: "Breda",
  //     artistID: "",
  //     artistName: "Jay Marten",
  //     expired: false,
  //     ticketLink: ""
  //   },
  //   {
  //     id: 0,
  //     venue: "Breda Barst",
  //     date: new Date("09-18-2022"),
  //     city: "Breda",
  //     artistID: "",
  //     artistName: "Jay Marten",
  //     expired: false,
  //     ticketLink: ""
  //   }
  // ]

  constructor(private http: HttpClient) { }

  public selectShow(show: Show) {
    this.selectedShow = show;
  }

  public async getShows() {
    return lastValueFrom(this.http.get(
      this.url,
      {headers: this.headers}))
      .then(response => {
        this.shows = response as Show[];
        return response as Show[];
      }).catch(error => {
        console.log(error)
        return null
      })
  }

  public async getArtist(id: string) {
    return await lastValueFrom(this.http.get(
      this.url + id,
      {headers: this.headers}))
      .then( show => {
        return show as Show;
      }).catch(error => {
        console.log(error)
        return null
      })
  }

  public async postShow(show: Show) {
    return await lastValueFrom(this.http.post(
      this.url,
      JSON.stringify(show),
      {headers: this.headers}))
      .then(response => {
        this.shows.push(response as Show)
        return show
      }).catch(error => {
        console.log(error)
        return null
      })
  }

  public async deleteShow(show: Show) {
    return await lastValueFrom(this.http.delete(
      this.url+show._id,
      {headers: this.headers}))
      .then(id => {
        this.shows = this.shows.filter(show => id !== show._id)
        return id
      }).catch(error => {
        console.log(error)
        return null
      })
  }

  public async updateShow(show: Show, id: string) {
    return await lastValueFrom(this.http.put(
      this.url +id,
      JSON.stringify(show),
      {headers: this.headers}))
      .then(show => {
        return show as Show
      }).catch(error => {
        console.log(error)
        return null
      })
  }
}
