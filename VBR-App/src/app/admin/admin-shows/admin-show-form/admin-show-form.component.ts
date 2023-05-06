import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    date: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    artist: new FormControl("", Validators.required),
    ticketLink: new FormControl("", Validators.required),
  })
  show!: Show;
  editMode = false;
  error = false;
  constructor(private showService: ShowService, private artistService: ArtistService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    const showId = String(this.route.snapshot.paramMap.get("id"));
    if(showId != "new") {
      this.showService.getShows().then(
        shows => {
          this.show = shows?.find(a=> a._id = showId) as Show;
          
        }
      )
    }
  }

  save() {
    console.log(this.showForm.controls)
  }

  cancel() {

  }

}
