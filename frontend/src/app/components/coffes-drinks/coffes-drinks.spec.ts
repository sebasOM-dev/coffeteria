import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffesDrinks } from './coffes-drinks';

describe('CoffesDrinks', () => {
  let component: CoffesDrinks;
  let fixture: ComponentFixture<CoffesDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffesDrinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffesDrinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
