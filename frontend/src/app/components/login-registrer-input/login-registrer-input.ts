import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'login-registrer-input',
  imports: [],
  templateUrl: './login-registrer-input.html',
  styleUrl: './login-registrer-input.css',
})
export class LoginRegistrerInput {
   readonly inputLabel = input.required<string>();
}
