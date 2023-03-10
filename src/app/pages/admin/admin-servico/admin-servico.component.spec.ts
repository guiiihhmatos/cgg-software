import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicoComponent } from './admin-servico.component';

describe('AdminServicoComponent', () => {
  let component: AdminServicoComponent;
  let fixture: ComponentFixture<AdminServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
