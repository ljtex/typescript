import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectAllComponent } from './option-select-all.component';

describe('OptionSelectAllComponent', () => {
  let component: OptionSelectAllComponent;
  let fixture: ComponentFixture<OptionSelectAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionSelectAllComponent]
    });
    fixture = TestBed.createComponent(OptionSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
