import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoListComponent } from './encargado-list.component';

describe('EncargadoListComponent', () => {
  let component: EncargadoListComponent;
  let fixture: ComponentFixture<EncargadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
