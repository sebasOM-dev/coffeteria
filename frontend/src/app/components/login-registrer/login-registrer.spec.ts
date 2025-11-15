import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrer } from './login-registrer';

describe('LoginRegistrer', () => {
  let component: LoginRegistrer;
  let fixture: ComponentFixture<LoginRegistrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRegistrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegistrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
