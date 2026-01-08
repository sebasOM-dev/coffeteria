import { Component } from '@angular/core';
import { ShopMenuItem } from "../shop-menu-item/shop-menu-item";

@Component({
  selector: 'app-shop-menu',
  imports: [ShopMenuItem],
  templateUrl: './shop-menu.html',
  styleUrl: './shop-menu.css',
})
export class ShopMenu {

}
