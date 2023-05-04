import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudespopComponent } from './solicitudespop.component';

describe('SolicitudespopComponent', () => {
  let component: SolicitudespopComponent;
  let fixture: ComponentFixture<SolicitudespopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudespopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudespopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
