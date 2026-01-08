import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarPrincipalOption } from './menu-bar-principal-option';

describe('MenuBarPrincipalOption', () => {
  let component: MenuBarPrincipalOption;
  let fixture: ComponentFixture<MenuBarPrincipalOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarPrincipalOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarPrincipalOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
