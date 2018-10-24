import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnodeComponent } from './parentnode.component';

describe('ParentnodeComponent', () => {
  let component: ParentnodeComponent;
  let fixture: ComponentFixture<ParentnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
