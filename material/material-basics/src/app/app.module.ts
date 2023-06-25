import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatIconsComponent } from './mat-icons/mat-icons.component';
import { BadgesComponent } from './badges/badges.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { FormControl } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { CardComponent } from './card/card.component';
import { SelectComponent } from './select/select.component';
import { TabsComponent } from './tabs/tabs.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxsComponent } from './checkboxs/checkboxs.component';
import { RadioComponent } from './radio/radio.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    MatIconsComponent,
    BadgesComponent,
    IconsComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionComponent,
    CardComponent,
    SelectComponent,
    TabsComponent,
    AutocompleteComponent,
    CheckboxsComponent,
    RadioComponent,
    DialogboxComponent,
    DialogExampleComponent,
    ChipsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
