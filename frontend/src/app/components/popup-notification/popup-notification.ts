import { Component, input } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-popup-notification',
  imports: [],
  templateUrl: './popup-notification.html',
  styleUrl: './popup-notification.css',
})


export class PopupNotification {
  isVisible: boolean = false;
  title = input('');
  message = input('');
}
