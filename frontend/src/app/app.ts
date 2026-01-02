import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRegistrer } from './components/login-registrer/login-registrer';
import { PopupNotificationService } from './services/popup-notification-service';
import { PopupNotification } from './components/popup-notification/popup-notification';

@Component({
  selector: 'app-root',
  imports: [LoginRegistrer, PopupNotification],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffeteria');
  sendPopUpNotification = signal(false);

  constructor(public popupNotificationService: PopupNotificationService){}
}
