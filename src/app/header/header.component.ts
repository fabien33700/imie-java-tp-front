import { Component, OnInit }          from '@angular/core';
import { MatDialog }                  from '@angular/material/dialog';
import { ConnectionserviceComponent } from './connectionservice/connectionservice.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  prenom: string;
  nom: string;
  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
   const dialogRef = this.dialog.open(ConnectionserviceComponent, {
      width: '250px',
      data: { prenom: this.prenom, nom: this.nom }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nom = result;
    });
  }

}
