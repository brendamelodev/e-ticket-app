import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Walkthroug1Component } from './walkthroug1.component';

describe('Walkthroug1Component', () => {
  let component: Walkthroug1Component;
  let fixture: ComponentFixture<Walkthroug1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Walkthroug1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Walkthroug1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
