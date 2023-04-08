import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: '[app-show-card]',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {
  @Input() show!: Show;
  
  constructor( private artistService: ArtistService, public datepip: DatePipe) { }

  ngOnInit(): void {
    let currentDate = new Date;
    if (this.show.date.getFullYear() < currentDate.getFullYear() ) {
      this.show.expired = true
    } else if(this.show.date.getMonth() < currentDate.getMonth()) {
      this.show.expired = true
    } else if(this.show.date.getMonth() == currentDate.getMonth()) {
      if(this.show.date.getDay() < currentDate.getDay()) {
        this.show.expired = true
      }
    }
  }

  toArtist() {
    let url = this.artistService.artists.find(x => x._id === this.show.artistID)?.urlName;
    // this._router.navigateByUrl('/artist/'+url)
  }

  toTickets() {
    window.location.href= this.show.ticketLink;
  }

}
