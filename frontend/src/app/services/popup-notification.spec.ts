import { TestBed } from '@angular/core/testing';

import { PopupNotification } from './popup-notification';

describe('PopupNotification', () => {
  let service: PopupNotification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupNotification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
