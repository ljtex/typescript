import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
//import { MatDivider } from '@angular/material';
import { AppComponent } from './app.component';
import { RowSpanComponent } from './row-span.component';
import { FreezeTableComponent } from './freeze-table/freeze-table.component';

@NgModule({
  imports:      [ BrowserModule, MatTableModule ],
  declarations: [ AppComponent, RowSpanComponent, FreezeTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
