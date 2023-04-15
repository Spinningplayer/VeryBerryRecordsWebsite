import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-admin-artist',
  templateUrl: './admin-artist.component.html',
  styleUrls: ['./admin-artist.component.css']
})
export class AdminArtistComponent implements OnInit {
  artists!: Artist[];

  constructor(private artistService: ArtistService, private _router: Router) { }

  ngOnInit(): void {
    this.artistService.getArtists()
    .then(artists => {
      this.artists = artists as Artist[];
    })
  }

  goToArtistForm(url: String) {
    this._router.navigateByUrl('/backstage/artist/'+url)
  }

  deleteArtist(artist: Artist) {
    this.artistService.deleteArtist(artist)
    .then(response => {
      if(response != null) {
        this.artistService.getArtists()
        .then(artists => {
          this.artists = artists as Artist[];
        })
      }
    })
  }
}
