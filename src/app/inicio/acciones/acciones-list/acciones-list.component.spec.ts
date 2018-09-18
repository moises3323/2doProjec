import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesListComponent } from './acciones-list.component';

describe('AccionesListComponent', () => {
  let component: AccionesListComponent;
  let fixture: ComponentFixture<AccionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
