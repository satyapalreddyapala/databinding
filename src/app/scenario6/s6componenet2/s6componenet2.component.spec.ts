import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6componenet2Component } from './s6componenet2.component';

describe('S6componenet2Component', () => {
  let component: S6componenet2Component;
  let fixture: ComponentFixture<S6componenet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6componenet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6componenet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
