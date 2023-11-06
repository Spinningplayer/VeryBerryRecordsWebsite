import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-admin-artist',
  templateUrl: './admin-artist.component.html',
  styleUrls: ['./admin-artist.component.scss']
})
export class AdminArtistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'spotifyId', 'delete'];
  dataSource!: MatTableDataSource<Artist>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  artists!: Artist[];
  allArtists!: Artist[];
  searchControl = new FormControl('');

  constructor(private artistService: ArtistService, private _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.artistService.getArtists()
    .then(artists => {
      this.artists = artists as Artist[];
      this.allArtists = artists as Artist[];

      this.dataSource = new MatTableDataSource(artists as Artist[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    // this.searchControl.registerOnChange(()=>{
    //   console.log(this.searchControl.value)
    // });

    this.searchControl.valueChanges.subscribe((value) => {
      if(value != null) {
        this.artists = this.allArtists.filter(artist => artist.name.toLowerCase().includes(value.toLowerCase()))
      } else {
        this.artists = this.allArtists;
      }
    })
  }

  goToArtistForm(url: String) {
    this._router.navigateByUrl('/backstage/artist/'+url)
  }

  deleteArtist(artist: Artist) {
    let dialogRef = this.dialog.open(DeleteDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.artistService.deleteArtist(artist)
        .then(response => {
          if(response != null) {
            this.artistService.getArtists()
            .then(artists => {
              this.dataSource.data = artists as Artist[];
            })
          }
        })
      }  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
