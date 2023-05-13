import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show.service';
import { MatDialog } from '@angular/material/dialog'
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.scss']
})
export class AdminShowsComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'artistName', 'venue', 'delete'];
  dataSource!: MatTableDataSource<Show>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  shows!: Show[];
  allShows!: Show[];
  searchControl = new FormControl('');

  constructor(private showService: ShowService, private _router: Router, public dialog: MatDialog) {
    
   }

  ngAfterViewInit() {
    this.showService.getShows()
    .then(shows => {
      this.shows = shows as Show[];
      this.allShows = shows as Show[];

      this.dataSource = new MatTableDataSource(shows as Show[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToShowForm(id: string) {
    this._router.navigateByUrl('/backstage/show/'+id)
  }

  deleteShow(show: Show) {
    let dialogRef = this.dialog.open(DeleteDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.showService.deleteShow(show)
        .then(response => {
          if(response != null) {
            this.showService.getShows().then(shows => {
              this.dataSource.data = shows as Show[];
            })
          }
        })
      }
    })
  }

}
