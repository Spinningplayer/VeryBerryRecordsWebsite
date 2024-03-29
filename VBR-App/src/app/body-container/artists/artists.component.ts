import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists!: Artist[] ;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists().then(response => {
      this.artists = response!
    }) 
  }
}
