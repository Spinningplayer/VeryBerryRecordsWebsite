import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit(): void {
    console.log('çomponent created')
  }

  delete() {
    this.dialogRef.close(true)
  }

  close() {
    this.dialogRef.close(false);
  }
}
