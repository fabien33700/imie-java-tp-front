import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-connectionservice',
  templateUrl: './connectionservice.component.html',
  styleUrls: ['./connectionservice.component.css']
})
export class ConnectionserviceComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<ConnectionserviceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




