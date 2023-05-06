import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';

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
  constructor(private artistService: ArtistService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.showForm.controls)
  }

  cancel() {

  }

}
