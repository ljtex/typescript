import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageComponent } from './next-page.component';

describe('NextPageComponent', () => {
  let component: NextPageComponent;
  let fixture: ComponentFixture<NextPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextPageComponent]
    });
    fixture = TestBed.createComponent(NextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
