import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '../Objects/Color';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  color = new FormControl(new Color('Green'));
  colors: Color[] = [
    {name: 'Red'},
    {name: 'White'},
    {name: 'Green'}
  ];
  saved: Color;

  constructor(
    private router:Router
    ){}

  ngOnInit(): void {
    this.localStorageLoad();
  }

  navigate() {
    this.localStorageSave();
    this.router.navigate(['/nextPage']);
  }

  localStorageSave() {
    localStorage.setItem("color", JSON.stringify(this.color.value.name));
  }

  localStorageLoad() {
    this.color.setValue(new Color(JSON.parse(localStorage.getItem("color"))));
  }

  compareColors(p1: Color, p2: Color): boolean {
    if (p1 && p2) {
      return p1.name === p2.name;
    }
    return false;
  }

}

