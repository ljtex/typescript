import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  options: string[] = ['Angular', 'React', 'Vue'];

  objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Material'},
    { name: 'Vue'},
    { name: 'React'},
  ]

  myFormControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit(): void {
    this.filteredOptions = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter( value) )
    );
  }

  private _filter(value: string): string[] {
    const filteredValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filteredValue))
  }
  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }
}
