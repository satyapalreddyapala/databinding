import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6componenet1Component } from './s6componenet1.component';

describe('S6componenet1Component', () => {
  let component: S6componenet1Component;
  let fixture: ComponentFixture<S6componenet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6componenet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6componenet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
