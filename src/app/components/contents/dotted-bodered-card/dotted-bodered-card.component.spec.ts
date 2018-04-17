import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedBoderedCardComponent } from './dotted-bodered-card.component';

describe('DottedBoderedCardComponent', () => {
  let component: DottedBoderedCardComponent;
  let fixture: ComponentFixture<DottedBoderedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DottedBoderedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DottedBoderedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
