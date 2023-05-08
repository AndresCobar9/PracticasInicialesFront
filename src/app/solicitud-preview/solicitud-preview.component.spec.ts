import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPreviewComponent } from './solicitud-preview.component';

describe('SolicitudPreviewComponent', () => {
  let component: SolicitudPreviewComponent;
  let fixture: ComponentFixture<SolicitudPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
