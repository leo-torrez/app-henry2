import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsRegisterComponent } from './parents-register.component';

describe('ParentsRegisterComponent', () => {
  let component: ParentsRegisterComponent;
  let fixture: ComponentFixture<ParentsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
