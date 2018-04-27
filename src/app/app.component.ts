import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configProvider: ConfigProvider) {
    platform.ready().then(() => {

      // O codigo abaixo irá fazer a pagina intro aparecer somente na primeira vez que o app e aberto.

      let config = configProvider.getConfig(); // Recebe o retorno da funcao getConfig declarada em "config.ts".
      let nomeAnimal = localStorage.getItem("nome");

      // Verifica se o nome do animal foi informado no campo do ultimo slide.
      // Se não tiver sido informado, vai exibir a página Intro
      // Se tiver sido informado, irá direto para a página Tabs.
      if ((nomeAnimal == "undefined") || (nomeAnimal == "") || (nomeAnimal == null)) {
        //configProvider.setConfig(false);
        this.rootPage = IntroPage;
      }
      else  {
        this.rootPage = TabsPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
