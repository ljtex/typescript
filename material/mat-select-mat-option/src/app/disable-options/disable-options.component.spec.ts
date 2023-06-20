import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableOptionsComponent } from './disable-options.component';

describe('DisableOptionsComponent', () => {
  let component: DisableOptionsComponent;
  let fixture: ComponentFixture<DisableOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisableOptionsComponent]
    });
    fixture = TestBed.createComponent(DisableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
