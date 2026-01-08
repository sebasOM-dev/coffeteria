import { TestBed } from '@angular/core/testing';

import { MenuBarPrincipalService } from './menu-bar-principal-service';

describe('MenuBarPrincipalService', () => {
  let service: MenuBarPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBarPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
