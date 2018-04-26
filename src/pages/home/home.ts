import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

let key:string = "nome";
let hora:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  saudacao: string;
  data:any;
  horaCerta:any;

  constructor(public navCtrl: NavController) {

  }

  mostraSaudacao() {
    this.data = new Date();
    this.horaCerta = this.data.getHours();
    this.saudacao = "";

    if (this.horaCerta < 12) {
      this.saudacao = "Bom dia!";
      return this.saudacao;
    }
    else if ((this.horaCerta >= 12) && (this.horaCerta <= 18)) {
      this.saudacao = "Boa tarde!";
      return this.saudacao;
    }
    else {
      this.saudacao = "Boa noite!";
      return this.saudacao;
    }
  }

  
  

  nomeAnimal = localStorage.getItem(key);


}
