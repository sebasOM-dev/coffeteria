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
  

  constructor() {
    this.popupMessage = {
      title: '',
      message: ''
    };
  }

  // setIsVisible(visible: boolean): void {
  //   this._isVisible = visible;
  // }
  
  setErrorMessage(){
    this.popupMessage.title = this.errorTittle;
    this.popupMessage.message = this.errorMessage;
  }

  setSuccessMessage(){
    this.popupMessage.title = this.successTittle;
    this.popupMessage.message = this.successMessage;
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
