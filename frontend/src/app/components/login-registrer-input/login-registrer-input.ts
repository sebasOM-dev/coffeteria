import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-registrer-input',
  imports: [FormsModule],
  templateUrl: './login-registrer-input.html',
  styleUrl: './login-registrer-input.css',
})
export class LoginRegistrerInput {
   readonly placeholderInput = input.required<string>();
   value = model<string>('');
}
