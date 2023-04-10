import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] | undefined;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    // this.artistService.getArtists().then(response => {
    //   console.log(response)
    //   this.artists = response!
    // })
    this.artists = this.artistService.getArtists();
  }

}
