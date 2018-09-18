import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesListComponent } from './reportes-list.component';

describe('ReportesListComponent', () => {
  let component: ReportesListComponent;
  let fixture: ComponentFixture<ReportesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
