import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatTableModule, MatToolbarModule,

} from '@angular/material';
import { ConnectionserviceComponent } from './header/connectionservice/connectionservice.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnectionserviceComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    CommonModule,
  ],
  entryComponents: [
    ConnectionserviceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
