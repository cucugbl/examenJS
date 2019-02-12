import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseRComponent } from './registrarse-r.component';

describe('RegistrarseRComponent', () => {
  let component: RegistrarseRComponent;
  let fixture: ComponentFixture<RegistrarseRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarseRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
