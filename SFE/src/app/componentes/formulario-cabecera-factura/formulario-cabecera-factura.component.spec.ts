import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCabeceraFacturaComponent } from './formulario-cabecera-factura.component';

describe('FormularioCabeceraFacturaComponent', () => {
  let component: FormularioCabeceraFacturaComponent;
  let fixture: ComponentFixture<FormularioCabeceraFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCabeceraFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCabeceraFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
