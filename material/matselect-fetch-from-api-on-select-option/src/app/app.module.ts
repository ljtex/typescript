import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
