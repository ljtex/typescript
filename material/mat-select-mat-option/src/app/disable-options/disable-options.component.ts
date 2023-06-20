import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disable-options',
  templateUrl: './disable-options.component.html',
  styleUrls: ['./disable-options.component.css']
})
export class DisableOptionsComponent {
  disableSelect = new FormControl(false);
}
