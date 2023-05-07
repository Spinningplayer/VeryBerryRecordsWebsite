import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  public shows!: Show[]; 

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.getShows()
    .then(shows => {
      this.shows = shows as Show[];
    })
    console.log(this.shows[0].artistName)
  }

}
