import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMedicamentosAPacienteComponent } from './actualizar-medicamentos-a-paciente.component';

describe('ActualizarMedicamentosAPacienteComponent', () => {
  let component: ActualizarMedicamentosAPacienteComponent;
  let fixture: ComponentFixture<ActualizarMedicamentosAPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarMedicamentosAPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarMedicamentosAPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
