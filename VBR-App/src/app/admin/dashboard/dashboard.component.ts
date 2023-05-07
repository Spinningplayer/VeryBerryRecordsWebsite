import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  artistCount = 0
  showCount = 0
  constructor(private artistService: ArtistService, private showService: ShowService, private _router: Router) { }

  ngOnInit(): void {
    this.artistService.getArtists().then(artists => {
      this.artistCount = artists?.length as number
    })
    this.showService.getShows().then(shows => {
      this.showCount = shows?.length as number
    })
  }

  redirectTo(url: string) {
    this._router.navigateByUrl(url)
  }

}
