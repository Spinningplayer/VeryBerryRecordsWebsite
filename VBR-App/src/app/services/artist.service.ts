import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Artist } from '../models/artist.model';
import {env} from '../environments/env';
import { AuthService } from './auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  private headers = new HttpHeaders({'content-type': 'application/json'})
  private url = env.serverUrl + '/artists/';
  

  public selectedArtist: Artist | undefined;

  public artists: Artist[] = [];

  constructor(
    private http: HttpClient, 
    private authService: AuthService,
    private _router: Router,
    private route: ActivatedRoute
    ) { }

  public selectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }

  public getArtists() {
    return lastValueFrom(this.http.get(
      this.url,
      {headers: this.headers}))
      .then(response => {
        this.artists = response as Artist[];
        return response as Artist[]
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  public async getArtist(id: number) {
    return await lastValueFrom(this.http.get(
      this.url + id,
      {headers: this.headers}))
      .then((artist) => {
        return artist as Artist
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  public async postArtist(artist: Artist) {
    return await lastValueFrom(this.http.post(
      this.url,
      JSON.stringify(artist),
      {headers: this.headers}))
      .then((artist) => {
        this.artists.push(artist as Artist);
        return artist
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  public async deleteArtist(artist: Artist) {
    return await lastValueFrom(this.http.delete(
      this.url + artist._id,
      {headers: this.headers}))
      .then((id) => {
        this.artists = this.artists.filter((artist) => id !== artist._id)
        return id
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  public async updateArtist(artist: Artist, id: string) {
    return await lastValueFrom(this.http.put(
      this.url + id,
      JSON.stringify(artist),
      {headers: this.headers}))
      .then((artist) => {
        return artist as Artist
      })
      .catch((error) => {
        console.log(error)
        this.handleError(error);
        return null
      })
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status == 401) {
      this.authService.logout();
      this._router.navigate(['/login'], {queryParams: {returnUrl: this.route.snapshot.url}})
    }
  }
}

