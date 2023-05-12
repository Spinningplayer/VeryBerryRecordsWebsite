import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-admin-artist',
  templateUrl: './admin-artist.component.html',
  styleUrls: ['./admin-artist.component.scss']
})
export class AdminArtistComponent implements OnInit {
  artists!: Artist[];
  allArtists!: Artist[];
  searchControl = new FormControl('');

  constructor(private artistService: ArtistService, private _router: Router) { }

  ngOnInit(): void {
    this.artistService.getArtists()
    .then(artists => {
      this.artists = artists as Artist[];
      this.allArtists = artists as Artist[];
    })

    // this.searchControl.registerOnChange(()=>{
    //   console.log(this.searchControl.value)
    // });

    this.searchControl.valueChanges.subscribe((value) => {
      if(value != null) {
        this.artists = this.allArtists.filter(artist => artist.name.toLowerCase().includes(value.toLowerCase()))
      } else {
        this.artists = this.allArtists;
      }
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

  search() {
    console.log(this.searchControl)
  }
}
