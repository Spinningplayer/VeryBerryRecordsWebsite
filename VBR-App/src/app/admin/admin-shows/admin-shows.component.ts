import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.css']
})
export class AdminShowsComponent implements OnInit {
  showForm = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
  }

}
