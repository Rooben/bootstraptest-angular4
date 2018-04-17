import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidBoderedCardComponent } from './solid-bodered-card.component';

describe('SolidBoderedCardComponent', () => {
  let component: SolidBoderedCardComponent;
  let fixture: ComponentFixture<SolidBoderedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidBoderedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidBoderedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
