import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Walkthroug2Component } from './walkthroug2.component';

describe('Walkthroug2Component', () => {
  let component: Walkthroug2Component;
  let fixture: ComponentFixture<Walkthroug2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Walkthroug2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Walkthroug2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
