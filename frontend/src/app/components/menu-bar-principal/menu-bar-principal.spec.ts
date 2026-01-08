import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarPrincipal } from './menu-bar-principal';

describe('MenuBarPrincipal', () => {
  let component: MenuBarPrincipal;
  let fixture: ComponentFixture<MenuBarPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
