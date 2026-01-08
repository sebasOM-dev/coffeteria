import { Injectable, signal, WritableSignal } from '@angular/core';
import PopupMessages from '../models/popupMessages';

@Injectable({
  providedIn: 'root',
})

export class PopupNotificationService {
  _isVisible = signal(false);
  popupMessage: PopupMessages;

  //LISTA DE MENSAJES PREDEFINIDOS
  errorTittle: string = "Error";
  errorMessage: string = "Ha ocurrido un error inesperado. Por favor, intente nuevamente más tarde.";
  successTittle: string = "Éxito";
  successMessage: string = "La operación se ha completado con éxito.";
  warningTittle: string = "Advertencia";
  warningMessage: string = "Por favor, revise la información proporcionada.";

  errorBackgroundColor: string = "#f54747";
  successBackgroundColor: string = "#47f54e";
  warningBackgroundColor: string = "#f5e147";


  

  constructor() {
    this.popupMessage = {
      title: '',
      message: '',
      messageColor: 'black',
      backgroundColor: 'white'
    };
  }
  
  setErrorMessage(){
    this.popupMessage.title = this.errorTittle;
    this.popupMessage.message = this.errorMessage;
    this.popupMessage.backgroundColor = this.errorBackgroundColor;
    this.popupMessage.messageColor = 'white';
  }

  setSuccessMessage(){
    this.popupMessage.title = this.successTittle;
    this.popupMessage.message = this.successMessage;
    this.popupMessage.backgroundColor = this.successBackgroundColor;
  }

  setWarningMessage(){
    this.popupMessage.title = this.warningTittle;
    this.popupMessage.message = this.warningMessage;
  }


  showPopup(status: number): void { 
    switch(status){
      case 200:
        this.setSuccessMessage();
        break;
      case 400:
        this.setErrorMessage();
        break;
    }

    this._isVisible.set(true);

    setTimeout(() => {
      this._isVisible.set(false);
    }, 4000);

  }




}
