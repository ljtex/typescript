import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeTableComponent } from './freeze-table.component';

describe('FreezeTableComponent', () => {
  let component: FreezeTableComponent;
  let fixture: ComponentFixture<FreezeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
