import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-menu-item',
  imports: [],
  templateUrl: './shop-menu-item.html',
  styleUrl: './shop-menu-item.css',
})
export class ShopMenuItem {

  @Input() name!: string;
  @Input() imageUrl!: string;

  @Output() buy = new EventEmitter<void>();
  @Output() favorite = new EventEmitter<void>();

  onBuy() {
    this.buy.emit();
  }

  onFavorite() {
    this.favorite.emit();
  }
}
