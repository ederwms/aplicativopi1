import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let key:string = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false
  }

  constructor() {
    
  }

  // Pega os dados no local storage
  getConfig():any {
    return localStorage.getItem(key) || {};
  }

  // Salva os dados no local storage  
  setConfig(showSlide: boolean):any {
    let config = {
      showSlide: false
    }

    if(showSlide) {
      config.showSlide = showSlide;
    }

    localStorage.setItem(key, JSON.stringify(config));
  }

}
