import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroP3Component } from './cadastro-p3.component';

describe('CadastroP3Component', () => {
  let component: CadastroP3Component;
  let fixture: ComponentFixture<CadastroP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroP3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
