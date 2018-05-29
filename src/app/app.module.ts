import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatFormFieldControl, MatFormFieldModule, MatGridListModule, MatInputModule, MatNativeDateModule,
  MatTableModule, MatToolbarModule,

} from '@angular/material';
import { ConnectionserviceComponent } from './header/connectionservice/connectionservice.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'angular-highcharts';
import {HighchartsModulesComponent} from './highcharts-modules/highcharts-modules.component';
import {ChartDataService} from './chart-data.service';
import {AmazingTimePickerModule, AmazingTimePickerService} from 'amazing-time-picker';
import {HttpClient, HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnectionserviceComponent,
    HighchartsModulesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    ChartModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule,

  ],
  providers: [ChartDataService, HttpClient],
  entryComponents: [
    ConnectionserviceComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
