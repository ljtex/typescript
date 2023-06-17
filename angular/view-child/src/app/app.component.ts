import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child';

  @ViewChild('dobInput')
  dateOfBirth: ElementRef = undefined as any;

  @ViewChild('ageInput')
  age: ElementRef = undefined as any;

  @ViewChild(DemoComponent, {static: true } ) demoComp: DemoComponent;

  calcAge() {

    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    this.age.nativeElement.value = new Date().getFullYear() - birthYear;
  }
}
