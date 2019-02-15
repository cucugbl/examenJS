import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPadreHijoComponent } from './formulario-padre-hijo.component';

describe('FormularioPadreHijoComponent', () => {
  let component: FormularioPadreHijoComponent;
  let fixture: ComponentFixture<FormularioPadreHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPadreHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
