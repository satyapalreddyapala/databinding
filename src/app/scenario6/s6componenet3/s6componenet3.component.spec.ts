import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6componenet3Component } from './s6componenet3.component';

describe('S6componenet3Component', () => {
  let component: S6componenet3Component;
  let fixture: ComponentFixture<S6componenet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6componenet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6componenet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
