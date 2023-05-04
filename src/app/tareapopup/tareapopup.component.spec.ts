import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareapopupComponent } from './tareapopup.component';

describe('TareapopupComponent', () => {
  let component: TareapopupComponent;
  let fixture: ComponentFixture<TareapopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareapopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
