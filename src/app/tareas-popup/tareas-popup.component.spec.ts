import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPopupComponent } from './tareas-popup.component';

describe('TareasPopupComponent', () => {
  let component: TareasPopupComponent;
  let fixture: ComponentFixture<TareasPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
