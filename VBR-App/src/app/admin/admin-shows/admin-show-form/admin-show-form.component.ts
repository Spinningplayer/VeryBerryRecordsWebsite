import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { Show } from 'src/app/models/show.model';
import { ArtistService } from 'src/app/services/artist.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-admin-show-form',
  templateUrl: './admin-show-form.component.html',
  styleUrls: ['./admin-show-form.component.css']
})
export class AdminShowFormComponent implements OnInit {
  showForm = new FormGroup({
    venue: new FormControl("", Validators.required),
    date: new FormControl(new Date, Validators.required),
    city: new FormControl("", Validators.required),
    artist: new FormControl("", Validators.required),
    ticketLink: new FormControl("", Validators.required),
  })
  show!: Show;
  artists!: Artist[];
  editMode = false;
  error = false;

  constructor(private showService: ShowService, private artistService: ArtistService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.artistService.getArtists()
    .then(artists => {
      this.artists = artists as Artist[];
    })
    
    const showId = String(this.route.snapshot.paramMap.get("id"));
    if(showId != "new") {
      this.showService.getShows().then(
        shows => {
          this.show = shows?.find(a=> a._id = showId) as Show;
          this.showForm.patchValue({
            venue: this.show.venue,
            date: this.show.date,
            city: this.show.city,
            artist: this.show.artistID,
            ticketLink: this.show.ticketLink
          })
        }
      )
      this.editMode = true;
    } else {
      this.editMode = false;
    } 
  }

  save() {
    console.log(this.showForm.controls)
    if(this.showForm.valid) {
        
      let artistId = this.showForm.controls['artist'].value as string;
      let selectedArtist = this.artists.find(a=>a._id === artistId)
      let showModel = new Show({
        venue: this.showForm.controls['venue'].value,
        date: this.showForm.controls['date'].value,
        city: this.showForm.controls['city'].value,
        artistID: artistId,
        artistName: selectedArtist?.name,
        ticketLink: this.showForm.controls['ticketLink'].value
      })
      console.log(showModel.artistName)
      if(this.editMode) {
        this.showService.updateShow(showModel, this.show._id)
        .then(response => {
          console.log(response)
          this._router.navigateByUrl('/backstage/show')
        })
        .catch(error => {
          console.log(error)
          this.error = true;
        })
      } else {
        this.showService.postShow(showModel)
        .then(response => {
          console.log(response)
          this._router.navigateByUrl('/backstage/show');
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
      }
    }
  }

  cancel() {
    this._router.navigateByUrl('/backstage/show');
  }

}
