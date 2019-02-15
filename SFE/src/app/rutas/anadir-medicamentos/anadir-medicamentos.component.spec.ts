import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMedicamentosComponent } from './anadir-medicamentos.component';

describe('AnadirMedicamentosComponent', () => {
  let component: AnadirMedicamentosComponent;
  let fixture: ComponentFixture<AnadirMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
