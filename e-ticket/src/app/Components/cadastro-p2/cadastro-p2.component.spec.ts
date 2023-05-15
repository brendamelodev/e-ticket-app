import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroP2Component } from './cadastro-p2.component';

describe('CadastroP2Component', () => {
  let component: CadastroP2Component;
  let fixture: ComponentFixture<CadastroP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
