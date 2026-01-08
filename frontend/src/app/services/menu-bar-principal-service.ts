import { Injectable, signal } from '@angular/core';
import { menuBarPrincipalOptions } from '../enums/menu-bar-principal-options';

@Injectable({
  providedIn: 'root',
})

export class MenuBarPrincipalService {

  currentOption = signal<menuBarPrincipalOptions>(menuBarPrincipalOptions.HOME);

  constructor() { }

  setCurrentOption(option: menuBarPrincipalOptions): void {
    this.currentOption.set(option);
  }


  
}
