import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


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
import {ChartModule} from 'angular-highcharts';
import {HighchartsModulesComponent} from './highcharts-modules/highcharts-modules.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnectionserviceComponent,
    HighchartsModulesComponent,
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
    ChartModule
  ],
  entryComponents: [
    ConnectionserviceComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
