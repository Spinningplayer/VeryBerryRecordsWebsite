import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: '[app-artist-show-tablerow]',
  templateUrl: './artist-show-tablerow.component.html',
  styleUrls: ['./artist-show-tablerow.component.css']
})
export class ArtistShowTablerowComponent implements OnInit {
  @Input() show!: Show;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
