import { Component, signal } from '@angular/core';
import { PopupNotificationService } from './services/popup-notification-service';
import { PopupNotification } from './components/popup-notification/popup-notification';
import { MenuBarPrincipal } from './components/menu-bar-principal/menu-bar-principal';
import { ShopMenu } from "./components/shop-menu/shop-menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PopupNotification, MenuBarPrincipal, ShopMenu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffeteria');
  sendPopUpNotification = signal(false);

  constructor(public popupNotificationService: PopupNotificationService){}
}
