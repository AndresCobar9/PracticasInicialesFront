import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudselectorComponent } from './solicitudselector.component';

describe('SolicitudselectorComponent', () => {
  let component: SolicitudselectorComponent;
  let fixture: ComponentFixture<SolicitudselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
