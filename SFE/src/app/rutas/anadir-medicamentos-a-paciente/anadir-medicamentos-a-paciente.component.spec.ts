import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMedicamentosAPacienteComponent } from './anadir-medicamentos-a-paciente.component';

describe('AnadirMedicamentosAPacienteComponent', () => {
  let component: AnadirMedicamentosAPacienteComponent;
  let fixture: ComponentFixture<AnadirMedicamentosAPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirMedicamentosAPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirMedicamentosAPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
