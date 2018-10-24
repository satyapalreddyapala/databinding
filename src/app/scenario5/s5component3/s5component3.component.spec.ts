import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5component3Component } from './s5component3.component';

describe('S5component3Component', () => {
  let component: S5component3Component;
  let fixture: ComponentFixture<S5component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
