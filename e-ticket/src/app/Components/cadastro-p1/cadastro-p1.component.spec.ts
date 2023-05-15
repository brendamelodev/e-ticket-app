import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroP1Component } from './cadastro-p1.component';

describe('CadastroP1Component', () => {
  let component: CadastroP1Component;
  let fixture: ComponentFixture<CadastroP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
