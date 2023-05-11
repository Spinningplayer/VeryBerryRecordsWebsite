import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.css']
})
export class AdminShowsComponent implements OnInit {
  shows!: Show[];
  allShows!: Show[];
  searchControl = new FormControl('');

  constructor(private showService: ShowService, private _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showService.getShows()
    .then(shows => {
      this.shows = shows as Show[];
      this.allShows = shows as Show[];
    })

    this.searchControl.valueChanges.subscribe((value) => {
      if(value != null) {
        this.shows = this.allShows.filter(show => show.artistName.toLowerCase().includes(value.toLowerCase()) || show.venue.toLowerCase().includes(value.toLowerCase()))
      } else {
        this.shows = this.allShows;
      }
    })
  }

  goToShowForm(id: string) {
    this._router.navigateByUrl('/backstage/show/'+id)
  }

  deleteShow(show: Show) {
    console.log('opening dialog')
    let dialogRef = this.dialog.open(DeleteDialogComponent)
    // this.showService.deleteShow(show)
    // .then(response => {
    //   if(response != null) {
    //     this.showService.getShows().then(shows => {
    //       this.shows = shows as Show[];
    //     })
    //   }
    // })
  }

}
