import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadresHijosComponent } from './padres-hijos.component';

describe('PadresHijosComponent', () => {
  let component: PadresHijosComponent;
  let fixture: ComponentFixture<PadresHijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadresHijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadresHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
