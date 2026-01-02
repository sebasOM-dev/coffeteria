import { Component, inject, Injectable, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from '../../../environments/environment.development';
import { LoginRegistrerInput } from '../login-registrer-input/login-registrer-input';
import { HttpClient } from '@angular/common/http';
import { PopupNotificationService } from '../../services/popup-notification-service';

@Component({
  selector: 'app-login-registrer',
  imports: [CommonModule, LoginRegistrerInput],
  templateUrl: './login-registrer.html',
  styleUrls: ['./login-registrer.css'],
})



@Injectable({providedIn: 'root'})
export class LoginRegistrer {
  rootUrl = "users/";
  constructor(public popupNotificationService: PopupNotificationService){
    
  }
  
  email = signal('');
  password = signal('');
  name = signal('');
  repeatPassword = signal('');
  isLoginPage = signal(true);
  private http = inject(HttpClient);


  toggleLoginPage() {
    this.isLoginPage.set(!this.isLoginPage());
  }

  loginUser(){
    const credenciales = {
      email: this.email(),
      password: this.password()
    }

    this.http.post(environment.apiUrl+this.rootUrl+"getUserByEmailPassword", credenciales).subscribe(
      {
        error: (error) => {
          this.popupNotificationService.showPopup(400);
          console.log('Login error:', error);
        },
        next: (response: any) => {
            alert("entra mondonguito");
            console.log('Login response:', response);
        }
      }
    );
  }

  registerUser(){
    const newUser = {
      email: this.email(),
      password: this.password(),
      name: this.name()
    }

    if(this.email() === '' || this.password() === '' || this.name() === ''){
      alert("Por favor, complete todos los campos");
      return;
    }

    if(this.password() != this.repeatPassword()){
      alert("Las contraseñas no coinciden");
      return;
    }

    this.http.post(environment.apiUrl+this.rootUrl+"addUser", newUser).subscribe(
      {
        error: (error) => {
          if(error.status === 400){
            //alert("El correo ya está registrado");
            //TODO: Cambiar alert por popup notification
            this.popupNotificationService.showPopup(400);
          }
        },
        next: (response: any) => {
            this.popupNotificationService.showPopup(200);
            console.log('Register response:', response);
        }
      }
    );
  }
}
