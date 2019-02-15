import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHijoPadreComponent } from './formulario-hijo-padre.component';

describe('FormularioHijoPadreComponent', () => {
  let component: FormularioHijoPadreComponent;
  let fixture: ComponentFixture<FormularioHijoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHijoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHijoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
