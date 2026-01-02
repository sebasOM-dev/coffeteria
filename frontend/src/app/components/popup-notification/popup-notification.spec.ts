import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNotification } from './popup-notification';

describe('PopupNotification', () => {
  let component: PopupNotification;
  let fixture: ComponentFixture<PopupNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
