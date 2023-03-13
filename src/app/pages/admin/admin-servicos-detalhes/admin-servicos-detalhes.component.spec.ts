import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicosDetalhesComponent } from './admin-servicos-detalhes.component';

describe('AdminServicosDetalhesComponent', () => {
  let component: AdminServicosDetalhesComponent;
  let fixture: ComponentFixture<AdminServicosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServicosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServicosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
