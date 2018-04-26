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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // O que ira fazer a pagina intro aparecer somente na primeira vez que o app e aberto.

      // Variavel que recebe o retorno da funcao getConfig declarada em "config.ts".
      let config = configProvider.getConfig();

      // Verifica se é a primeira vez que a pagina intro esta sendo mostrada.
      if (config == null) {
        configProvider.setConfig(false);
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
