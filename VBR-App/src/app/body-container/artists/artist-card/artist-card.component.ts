import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist!: Artist | undefined;

  constructor(private artistService: ArtistService, private _router: Router) { }

  ngOnInit(): void {

  }

  selectArtist() {
    this._router.navigateByUrl('/artist/'+this.artist?.urlName)
  }

}
