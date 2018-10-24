import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4childComponent } from './s4child.component';

describe('S4childComponent', () => {
  let component: S4childComponent;
  let fixture: ComponentFixture<S4childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
