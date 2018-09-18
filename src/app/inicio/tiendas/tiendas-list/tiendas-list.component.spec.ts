import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasListComponent } from './tiendas-list.component';

describe('TiendasListComponent', () => {
  let component: TiendasListComponent;
  let fixture: ComponentFixture<TiendasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
