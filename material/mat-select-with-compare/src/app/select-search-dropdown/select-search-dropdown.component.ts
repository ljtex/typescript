import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewRef
} from "@angular/core";
import { FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatSelectChange } from "@angular/material/select";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from "rxjs/operators";
import { ISelectSearchValidators } from "./select-search-dropdown.interface";
import * as _ from "lodash";

/**
 *  Use case to search through a large set of items within dropdown
 *  and only one option can be selected at a time.
 *
 *  If there are more than 5 options the search will appear with the ability to search
 *
 *  If an "All" option is needed please pass it in the option array as the first index
 *
 *  The dropdown will display the first 50 results.
 *
 *  The dropdown will scroll once the search is applied.
 *
 *  As user types, and there are no results we show "No results found, please try again."
 *
 *  As user types, and blurs from the input it will select closes match or last selected match.
 *
 *  As user types or item is selected, the clear (x) button will appear on search
 *  input as long as the # of options is greater than one.
 *
 *  Optional Input() defaultOptionIndex to force select an option via array index.
 *  * Currently the default is 0
 *
 *  Optional Input() panelClass to position the overlay if needed.
 *
 *  Optional Input() multiple boolean value if you would like the to have multi select.
 *
 *  Optional Input() tooltipMessage pass a string (edit this if you need to pass more than just a string)
 *
 *  Optional Input() searchPlaceholder pass a string
 *
 *  Optional Input() selectPlaceholder pass a string
 *
 *  Optional Input() validatorArray pass an array of ISelectSearchValidators
 *
 *  Optional Input() setInitialValue defaulted to true; pass false if no initial value should be selected.
 *
 *  Optional Input() maxItemsLoaded defaulted to slice top 50 results from options.
 *
 *  Optional Input() selected is where you can send an array of preselected items
 *                   Required to have "value" property so that the [compareWith] fn can work
 *                   * NOTE please edit logic if you find a more dynamic approach. I would prefer to use
 *                   Input() extractValue instead of requiring "value" property, however the [compareWith] fn
 *                   loads before the Input() extractValue is loaded
 *
 *  This component can take an array of strings or objects.
 *  To specify which value should be surfaced as the option label
 *  you can specify so in the extractValue Input()
 *  * Note: Currently this component can go one level deep so the arrays need to be flat.
 *  * Please feel free to modify this component if one level deep is not enough.
 *
 *  <ent-select-search-dropdown
 *    [label]="type.info"
 *    [options]="type.options"
 *    [extractValue]="'serviceTN'"
 *    [defaultOptionIndex]="type.defaultOptionIndex"
 *    (selectedEvent)="onOptionSelected($event, type)"
 *  ></ent-select-search-dropdown>
 *
 */

@Component({
  selector: "app-select-search-dropdown",
  templateUrl: "./select-search-dropdown.component.html",
  styleUrls: ["./select-search-dropdown.component.scss"]
})
export class SelectSearchDropdownComponent
  implements AfterViewChecked, OnDestroy, OnInit {
  @ViewChild("searchDropdownInput")
  searchDropdownInput!: ElementRef<HTMLInputElement>;

  @ViewChild("multiAllOption") multiAllOption: MatOption;
  multiSelectedValues: any[];

  private _destroy$: Subject<any> = new Subject();

  @Output() selectedEvent = new EventEmitter<any>();
  @Output() formValidEvent = new EventEmitter<boolean>();
  @Input() selected?: any;

  // required Inputs
  @Input() label!: string;
  @Input() options!: any[];
  maxNumOptionsBeforeSearch = 5;

  // optional Inputs
  @Input() maxItemsLoaded = 50;
  @Input() validatorArray?: ISelectSearchValidators[];
  @Input() validationRequiredText = "This is a required field";
  @Input() selectPlaceholder = "Select One";
  @Input() extractValue?: string;
  @Input() disableSelectSearch = true;
  @Input() searchPlaceholder = "Search";
  @Input() defaultOptionIndex = 0;
  @Input() panelClass = "";
  @Input() tooltipMessage?: string;
  @Input() setInitialValue = true;
  scrollClass = "";

  @Input() multiple = false;

  showSearch!: boolean;
  selectSearchForm: FormGroup;
  filteredOptions$: Observable<any[]>;
  showAllOption!: boolean;
  showClearButton!: boolean;
  private _filterValue?: string;
  private _filteredListLength: number;
  private _filteredList!: any[];

  constructor(
    private _formBuilder: FormBuilder,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.options.length > this.maxNumOptionsBeforeSearch) {
      this.showSearch = true;
      this.scrollClass = "scroll";
    }

    this._setUpFormControls(
      this.validatorArray,
      this.selected,
      this.setInitialValue,
      this.multiple
    );

    if (this.showSearch) {
      this.filteredOptions$ = this.selectSearchForm
        .get("SearchControl")
        .valueChanges.pipe(
          takeUntil(this._destroy$),
          startWith(""),
          map(value => {
            this.showClearButton = this._showClearButton(value);
            return this._filter(value);
          })
        );
    }

    this.selectSearchForm.statusChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(res => {
        // response possibilities: VALID, INVALID, PENDING and DISABLED
        if (res === "VALID") {
          this.formValidEvent.emit(true);
        }
        if (res === "INVALID") {
          this.formValidEvent.emit(false);
        }
      });
  }

  ngAfterViewChecked(): void {
    if (this._cd && !(this._cd as ViewRef).destroyed) {
      this._cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  compareWithFn(optionOne: any, optionTwo: any): boolean {
    if (typeof optionOne === "string" && typeof optionTwo === "string") {
      return optionOne === optionTwo;
    } else {
      return _.isEqual(optionOne, optionTwo);
    }
  }

  optionSelected($event: MatSelectChange): void {
    this._setSelectValue($event.value);
  }

  clear($event): void {
    $event.stopPropagation();
    this._filteredList = this.options.slice(0, this.maxItemsLoaded);
    this._setSelectValue(this.selected);
    this.selectSearchForm.get("SearchControl").setValue("");
    this.selectSearchForm.get("SearchControl").reset();
    this.showClearButton = false;
  }

  openedChange(opened: boolean) {
    if (!opened && this._filteredListLength === 0 && !this.multiple) {
      this.selectSearchForm.get("SearchControl").setValue("");
      this.selectSearchForm.get("SearchControl").reset();
      // no match set last selected option
      this._setSelectValue(this.selected);
    }

    if (!opened && this._filteredListLength > 0 && !this.multiple) {
      // set first match
      this._setSelectValue(this._filteredList[0]);
    }

    if (opened) {
      if (
        !!this.searchDropdownInput.nativeElement.value
          .toLowerCase()
          .includes("all")
      ) {
        this.selectSearchForm.get("SearchControl").setValue("");
        this.selectSearchForm.get("SearchControl").reset();
        this.searchDropdownInput.nativeElement.value = "";
      }
      this.searchDropdownInput.nativeElement.focus();
    }

    // multi select logic
    if (this.multiple && !opened && !this.multiAllOption.selected) {
      const rawValue = this.selectSearchForm.getRawValue();
      this._setSelectValue(rawValue.SelectControl);
    }

    if (this.multiple && !opened && this.multiAllOption.selected) {
      this.selected = this.options;
      this._setSelectValue(this.selected);
    }
  }

  displayValue(value: any): string {
    if (!!value && !!this.extractValue && !!value[this.extractValue]) {
      return value[this.extractValue];
    } else {
      return value;
    }
  }

  toggleSelectAll(): void {
    const multiSelectControls = this.selectSearchForm.get("SelectControl");

    if (this.multiAllOption.selected) {
      if (this.showSearch) {
        multiSelectControls.setValue([...this.options]);
      } else {
        multiSelectControls.patchValue([...this.options.map(item => item), 0]);
      }

      this.multiAllOption.select();
    } else {
      this._setSelectValue([]);
      multiSelectControls.patchValue([]);
      this.multiAllOption.deselect();
    }
  }

  recalculateCheckedBoxes() {
    const multiSelectControls = this.selectSearchForm.get("SelectControl");
    const multiSelectLength = multiSelectControls.value.filter(x => !!x).length;

    if (this.multiAllOption.selected) {
      this.multiAllOption.deselect();
      return false;
    }
    if (multiSelectLength === this.options.length) {
      this.multiAllOption.select();
    }
    return true;
  }

  private _getValidatorFns(
    validatorArray: ISelectSearchValidators[]
  ): ValidatorFn[] {
    const validators = [];
    if (!!validatorArray && validatorArray.length > 0) {
      validatorArray.forEach(x => validators.push(x.validatorFn));
    }
    return validators;
  }

  private _setUpFormControls(
    validators?: ISelectSearchValidators[],
    selected?: any,
    setInitialValue?: boolean,
    multiple?: boolean
  ): void {
    this.selectSearchForm = this._formBuilder.group({
      SelectControl: [
        this._setInitialValue(selected, setInitialValue, multiple),
        this._getValidatorFns(validators)
      ],
      SearchControl: [""]
    });
  }

  private _isOptionAll(value: any): boolean {
    if (!!value) {
      const displayValue = this.displayValue(value);
      return displayValue.toLowerCase().includes("all");
    } else {
      return false;
    }
  }

  private _setInitialValue(
    selected?: any,
    setInitialValue?: boolean,
    multiple?: boolean
  ): any {
    if (!!selected && setInitialValue) {
      this.selectedEvent.emit(selected);
      return selected;
    }

    if (
      !selected &&
      setInitialValue &&
      !multiple &&
      (this.defaultOptionIndex === 0 || !!this.defaultOptionIndex)
    ) {
      this.selected = this.options[this.defaultOptionIndex];

      this.selectedEvent.emit(this.selected);
      return this.selected;
    }

    return [];
  }

  private _setSelectValue(value: any) {
    if (!this._areEqual(value, this.selected)) {
      this.selected = value;
      // is first option multi All?
      if (Array.isArray(value[0])) {
        this.selectedEvent.emit(value[0]);
      } else {
        this.selectedEvent.emit(value);
      }
      this.selectSearchForm.get("SelectControl").setValue(value);
      if (!this.multiple && !this._isOptionAll(value)) {
        this.selectSearchForm
          .get("SearchControl")
          .setValue(this.displayValue(value));
      }
    }
  }

  private _filter(value: string): string[] {
    if (!value || value.toLowerCase().includes("all")) {
      return this.options.slice(0, 50);
    }

    this._filterValue = value.toLowerCase();

    this._filteredList = this.options.filter(option => {
      const optionValue = this.displayValue(option);
      return optionValue.toLowerCase().indexOf(this._filterValue) !== -1;
    });

    this._filteredListLength = this._filteredList.length;

    // display first 50 matches
    return this._filteredList.slice(0, this.maxItemsLoaded);
  }

  private _showClearButton(value): boolean {
    return value.length > 0;
  }

  private _areEqual(obj1: any, obj2: any): boolean {
    return this.displayValue(obj1) === this.displayValue(obj2);
  }
}


/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-search-dropdown',
  templateUrl: './select-search-dropdown.component.html',
  styleUrls: ['./select-search-dropdown.component.scss']
})
export class SelectSearchDropdownComponent {

}
*/
