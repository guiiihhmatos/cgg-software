import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarFuncionarioComponent } from './admin-cadastrar-funcionario.component';

describe('AdminCadastrarFuncionarioComponent', () => {
  let component: AdminCadastrarFuncionarioComponent;
  let fixture: ComponentFixture<AdminCadastrarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCadastrarFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadastrarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
