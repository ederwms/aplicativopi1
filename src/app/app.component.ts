import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
//import { ConfigProvider } from '../providers/config/config';

let key:string = "nome";

@Component({
  templateUrl: 'app.html',
  providers: [
    //ConfigProvider
  ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,) {
    platform.ready().then(() => {

      // O codigo abaixo irá fazer a pagina intro aparecer somente na primeira vez que o app e aberto.
      // A variavel nomeAnimal recebe o que esta gravado no localStorage no item que está na variavel key("nome").
      let nomeAnimal = localStorage.getItem(key);

      // Verifica se o nome do animal foi informado no campo do ultimo slide.
      // Se não tiver sido informado, vai exibir a página Intro
      if ((nomeAnimal == "undefined") || (nomeAnimal == "") || (nomeAnimal == null)) {
        this.rootPage = IntroPage;
      }
      // Se tiver sido informado, irá direto para a página Tabs.
      else  {
        this.rootPage = TabsPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
