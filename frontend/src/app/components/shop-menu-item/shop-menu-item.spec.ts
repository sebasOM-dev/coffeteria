import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMenuItem } from './shop-menu-item';

describe('ShopMenuItem', () => {
  let component: ShopMenuItem;
  let fixture: ComponentFixture<ShopMenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopMenuItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMenuItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
