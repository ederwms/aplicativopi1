import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 let keyNome:string = "nome";
 let keyRaca: string = "raca";
 let keyPeso: string = "peso";

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  inputNome: string;
  inputRaca: string;
  inputPeso: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  /*
  public goToTabsPage() {
    this.navCtrl.push(TabsPage)
  }
  */

  gravaNome() {
    localStorage.setItem(keyPeso, this.inputPeso);
    localStorage.setItem(keyRaca, this.inputRaca);
    localStorage.setItem(keyNome, this.inputNome);
    this.navCtrl.push(TabsPage);
  }

}
