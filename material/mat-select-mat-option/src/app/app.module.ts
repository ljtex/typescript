import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmbeddedOptionsWorkingComponent } from './embedded-options-working/embedded-options-working.component';
import { DisableOptionsComponent } from './disable-options/disable-options.component';
import { OptionGroupsComponent } from './option-groups/option-groups.component';
import { OptionSelectAllComponent } from './option-select-all/option-select-all.component';
//import { FormcontrolSetvalueComponent } from './formcontrol.setvalue/formcontrol.setvalue.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EmbeddedOptionsWorkingComponent,
    DisableOptionsComponent,
    OptionGroupsComponent,
    OptionSelectAllComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
