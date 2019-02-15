import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDetalleFacturaComponent } from './gestion-detalle-factura.component';

describe('GestionDetalleFacturaComponent', () => {
  let component: GestionDetalleFacturaComponent;
  let fixture: ComponentFixture<GestionDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDetalleFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
