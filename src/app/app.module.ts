import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfigProvider } from '../providers/config/config';
import { FormProvider } from '../providers/form/form';
import { MapaPageModule } from '../pages/mapa/mapa.module';
import { ConexaoPageModule } from '../pages/conexao/conexao.module';

import { Geolocation } from '@ionic-native/geolocation';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    MapaPageModule,
    ConexaoPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    FormProvider
  ]
})
export class AppModule {}
