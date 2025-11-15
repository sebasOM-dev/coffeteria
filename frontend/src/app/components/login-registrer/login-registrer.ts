import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegistrerInput } from '../login-registrer-input/login-registrer-input';





@Component({
  selector: 'app-login-registrer',
  // standalone: true,
  imports: [CommonModule, LoginRegistrerInput],
  templateUrl: './login-registrer.html',
  styleUrls: ['./login-registrer.css'],
})







export class LoginRegistrer {
  isLoginPage = signal(true); 

  toggleLoginPage() {
    this.isLoginPage.set(!this.isLoginPage());
  }
}
