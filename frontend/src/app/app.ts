import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRegistrer } from './components/login-registrer/login-registrer'; 

@Component({
  selector: 'app-root',
  imports: [LoginRegistrer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffeteria');
}
