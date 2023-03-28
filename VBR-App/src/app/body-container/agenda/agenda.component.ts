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
    this.shows = this.showService.shows;
  }

}
