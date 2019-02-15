import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPacienteComponent } from './anadir-paciente.component';

describe('AnadirPacienteComponent', () => {
  let component: AnadirPacienteComponent;
  let fixture: ComponentFixture<AnadirPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
