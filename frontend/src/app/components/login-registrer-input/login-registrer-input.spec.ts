import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrerInput } from './login-registrer-input';

describe('LoginRegistrerInput', () => {
  let component: LoginRegistrerInput;
  let fixture: ComponentFixture<LoginRegistrerInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRegistrerInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegistrerInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
