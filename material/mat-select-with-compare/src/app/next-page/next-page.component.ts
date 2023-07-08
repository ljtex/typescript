import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements OnInit {

  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

}
