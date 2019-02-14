import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRComponent } from './home-r.component';

describe('HomeRComponent', () => {
  let component: HomeRComponent;
  let fixture: ComponentFixture<HomeRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
