import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesVentanaComponent } from './publicaciones-ventana.component';

describe('PublicacionesVentanaComponent', () => {
  let component: PublicacionesVentanaComponent;
  let fixture: ComponentFixture<PublicacionesVentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesVentanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
