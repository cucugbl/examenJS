import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleFacturaComponent } from './ver-detalle-factura.component';

describe('VerDetalleFacturaComponent', () => {
  let component: VerDetalleFacturaComponent;
  let fixture: ComponentFixture<VerDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetalleFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
