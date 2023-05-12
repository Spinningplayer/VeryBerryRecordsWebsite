import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { Show } from 'src/app/models/show.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: '[app-show-card]',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {
  @Input() show!: Show;
  artists!: Artist[];
  
  constructor( private artistService: ArtistService, public datepip: DatePipe, private _router: Router) { }

  ngOnInit(): void {
    let currentDate = new Date;
    this.show.date = new Date(this.show.date)
    if (this.show.date.getFullYear() < currentDate.getFullYear() ) {
      this.show.expired = true
    } else if(this.show.date.getMonth() < currentDate.getMonth() && this.show.date.getFullYear() == currentDate.getFullYear()) {
      this.show.expired = true
    } else if(this.show.date.getMonth() == currentDate.getMonth()  && this.show.date.getFullYear() == currentDate.getFullYear()) {
      if(this.show.date.getDay() < currentDate.getDay()) {
        this.show.expired = true
      }
    }

    this.artistService.getArtists()
    .then(artists => {
      this.artists = artists as Artist[];
    })
  }

  toArtist() {
    let url = this.artists.find(x => x._id === this.show.artistID)?.urlName;
    this._router.navigateByUrl('/artist/'+url)
  }

  toTickets() {
    window.location.href= this.show.ticketLink;
  }

}
