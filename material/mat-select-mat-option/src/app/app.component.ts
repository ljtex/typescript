import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import {MatSelect} from '@angular/material/select';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {

  dashboardForm: FormGroup;
  selectedValues: any[]; //MatOption[];
  allSelected = false;

  //thisSelect: MatSelect;

   public displayDashboardValues = [
    {key:'0', valuePositionType: 'undefined', viewValue:'Select all'},
    {key:'1', valuePositionType: 'profit-loss-area', viewValue:'result'},
    {key:'2', valuePositionType: 'cash-area', viewValue:'cash'},
    {key:'3', valuePositionType: 'balance-area', viewValue:'balance'},
    {key:'4', valuePositionType: 'staff-area' ,viewValue:'staff'},
    {key:'5', valuePositionType: 'divisions-area', viewValue:'divisions'},
    {key:'6', valuePositionType: 'commisions-area', viewValue:'commisions'},
  ];

  public optionsBasedOn; // = new MatOption<string, string, string>[]();

  notWorking: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
     // Dashboard form
    this.dashboardForm = this.formBuilder.group({
      dashboardValue: [null]
    });

    /*
    this.displayDashboardValues.forEach((v) => {
      const opt = new MatOption<>(p);
      this.optionsBasedOn.push(opt);
    })
    */
  }

  toggleAllSelection() {
    this.allSelected = !this.allSelected;  // to control select-unselect
    this.selectedValues = this.allSelected ? this.displayDashboardValues : [];

  }

  selectionChange(event: any) {
    let newStatus = true;
    this.selectedValues.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }
  saveDashboard() {

  }
  optionClick() {
    let newStatus = true;
    console.log(`this option ${this.allSelected}, and newStatus = ${newStatus}`);
    this.selectedValues.forEach((item: MatOption) => {
      if (!item.selected) {
        console.log(`is this item selected: ${item.selected}`);

        newStatus = false;
      }
    });
    if (this.selectedValues.length === this.displayDashboardValues.length - 1 ) {
      this.allSelected = true;
    };
    console.log(`this all selceted ${this.allSelected}, and newStatus = ${newStatus}`);
  }

  optionClickNotSure(select: MatSelect) {
    let newStatus = true;
    console.log(`this option ${this.allSelected}, and newStatus = ${newStatus}`);
    //console.log(`MatSelect: ${JSON.stringify(this.thisSelect)}`);
    console.log(`MatSelect passed in: ${JSON.stringify(select)}`);
    select.options?.forEach((item: MatOption) => {
      console.log(`this item: ${JSON.stringify(item)}`);
      if (!item.selected) {
        console.log(`is this item selected: ${item.selected}`);

        newStatus = false;
      }
    });
    this.allSelected = newStatus;
    console.log(`this option ${this.allSelected}, and newStatus = ${newStatus}`);
  }
}
