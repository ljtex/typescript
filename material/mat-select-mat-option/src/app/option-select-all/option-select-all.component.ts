//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
//import { MatOption } from '@angular/material';

@Component({
  selector: 'app-option-select-all',
  templateUrl: './option-select-all.component.html',
  styleUrls: ['./option-select-all.component.css']
})
export class OptionSelectAllComponent {
  searchUserForm: FormGroup;

  userTypeFilters = [
    {
      key: 1, value: 'Value 1',
    },
    {
      key: 2, value: 'Value 2',
    },
    {
      key: 3, value: 'Value 3',
    },
    {
      key: 4, value: 'Value 4',
    }
  ];
  @ViewChild('allSelected') private allSelected: MatOption;
  @ViewChild('mySel') mySel: MatSelect;
  @ViewChild('thisItem') private thisItem: MatOption;

  allSeled = false;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });
  }

  toggleAllSelectionByFormControl() {
    console.log(`controls: ${JSON.stringify(this.searchUserForm.controls["userType"].value)}`);
    console.log(`allOption: ${this.allSelected.selected}`);
    if (this.allSelected.selected) {
      this.searchUserForm.controls["userType"]
        .patchValue([...this.userTypeFilters.map(item => item.key), 0]);
      console.log(`controls: ${JSON.stringify(this.searchUserForm.controls["userType"].value)}`);
    } else {
      this.searchUserForm.controls["userType"].patchValue([]);
    }
  }

  toggleAllSelection() {
    this.allSeled = !this.allSeled;

    if(this.allSeled) {
      this.mySel.options.forEach( (item: MatOption) => item.select());
    } else {
      this.mySel.options.forEach( (item: MatOption) => { item.deselect() });
    }
    const options = this.mySel.options.forEach(op => {
      const t = op.id;
      console.log(`MySel: ${t}`);
    });
    //this.mySel.close();
  }

  togglePerOne(thisItem){
    //console.log(`selectedItem: ${JSON.stringify(thisItem)}`);
    //console.log(`selectedItem: ${JSON.stringify(this.thisItem)}`);
    console.log(`selected item: ${thisItem.id}, ${thisItem.selected} ${thisItem.value}`);
    if (this.thisItem.selected) {
      this.allSelected.deselect();
      //return false;
    }

    if(this.searchUserForm.controls["userType"].value.length==this.userTypeFilters.length) {
      //this.allSelected.select();
      this.searchUserForm.controls["userType"]
        .patchValue([...this.userTypeFilters.map(item => item.key), 0]);
      //return true;
    }
    console.log(`final selected: ${this.searchUserForm.controls["userType"].value}`);
  }
  togglePerOneOld(all){
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if(this.searchUserForm.controls["userType"].value.length==this.userTypeFilters.length)
      this.allSelected.select();
      return true;
  }
}
