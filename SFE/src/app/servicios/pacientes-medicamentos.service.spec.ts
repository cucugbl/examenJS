import { TestBed } from '@angular/core/testing';

import { PacientesMedicamentosService } from './pacientes-medicamentos.service';

describe('PacientesMedicamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacientesMedicamentosService = TestBed.get(PacientesMedicamentosService);
    expect(service).toBeTruthy();
  });
});
