import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-menu-bar-principal-option',
  imports: [RouterLink],
  templateUrl: './menu-bar-principal-option.html',
  styleUrl: './menu-bar-principal-option.css',
})
export class MenuBarPrincipalOption {
  labelOption = input.required<string>();
  routerLinkPath = input.required<string>();


  holamundo() {
    alert('Hola mundo');
  }
}
