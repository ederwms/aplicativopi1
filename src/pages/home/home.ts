import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

let key:string = "nome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nomeAnimal = localStorage.getItem(key);


}
