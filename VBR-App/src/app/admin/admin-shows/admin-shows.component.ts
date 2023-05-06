import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show.service';


@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.css']
})
export class AdminShowsComponent implements OnInit {
  shows!: Show[];

  constructor(private showService: ShowService, private _router: Router) { }

  ngOnInit(): void {
    this.showService.getShows()
    .then(shows => {
      this.shows = shows as Show[];
    })
  }

  goToShowForm(id: string) {
    this._router.navigateByUrl('/backstage/show/'+id)
  }

  deleteShow(show: Show) {

  }

}
