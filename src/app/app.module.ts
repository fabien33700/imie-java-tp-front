import { CommonModule }                     from '@angular/common';
import { HttpClient, HttpClientModule }                                    from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule }                                from '@angular/core';
import { FormsModule }                                                     from '@angular/forms';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule }                                                   from '@angular/platform-browser';
import { BrowserAnimationsModule }                                         from '@angular/platform-browser/animations';
import { AmazingTimePickerModule }                                         from 'amazing-time-picker';
import { ChartModule }                                                     from 'angular-highcharts';

import { AppComponent }               from './app.component';
import { ChartDataService }           from './chart-data.service';
import { ConnectionserviceComponent } from './header/connectionservice/connectionservice.component';
import { HeaderComponent }            from './header/header.component';
import { HighchartsModulesComponent } from './highcharts-modules/highcharts-modules.component';
import { KeyValuePipe }               from './highcharts-modules/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnectionserviceComponent,
    HighchartsModulesComponent,
    KeyValuePipe,
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
    MatSelectModule
  ],
  providers: [ChartDataService, HttpClient,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop'},
  ],
  entryComponents: [
    ConnectionserviceComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
