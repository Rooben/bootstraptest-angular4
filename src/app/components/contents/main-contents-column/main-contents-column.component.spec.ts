import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentsColumnComponent } from './main-contents-column.component';

describe('MainContentsColumnComponent', () => {
  let component: MainContentsColumnComponent;
  let fixture: ComponentFixture<MainContentsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentsColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
