import { Component } from '@angular/core';
import { menuBarPrincipalOptions } from '../../enums/menu-bar-principal-options';
import { MenuBarPrincipalOption } from '../menu-bar-principal-option/menu-bar-principal-option';



@Component({
  selector: 'app-menu-bar-principal',
  imports: [MenuBarPrincipalOption],
  templateUrl: './menu-bar-principal.html',
  styleUrl: './menu-bar-principal.css',
})

export class MenuBarPrincipal {
  MENU_OPTIONS = [
  {
    route: '/',
    value: menuBarPrincipalOptions.HOME
  },
  {
    route: '/stores',
    value: menuBarPrincipalOptions.STORES
  },
  {
    route: '/reviews',
    value: menuBarPrincipalOptions.REVIEWS
  },
  {
    route: '/profile',
    value: menuBarPrincipalOptions.ABOUT_ME
  }
] as const;
}
