import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  public shows: Show[] = [
    {
      id: 0,
      venue: "Mezz Breda",
      date: new Date("06-05-2022"),
      city: "Breda",
      artistID: "",
      artistName: "Jay Marten",
      expired: false,
      ticketLink: ""
    },
    {
      id: 0,
      venue: "Breda Barst",
      date: new Date("09-18-2022"),
      city: "Breda",
      artistID: "",
      artistName: "Jay Marten",
      expired: false,
      ticketLink: ""
    }
  ]

  constructor() { }
}
