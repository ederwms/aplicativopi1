import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';

let keyNome: string = "nome";
let keyRaca: string = "raca";
let keyPeso: string = "peso";
//let hora:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  saudacao: string;
  data: any;
  horaCerta: any;

  valores: any[];
  i: any;
  batimentos: any;
  mensagem: string = "Começar a medir";
  estado: string = "AGUARDANDO...";
  cor: string = "black";

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.batimentos = 0;
  }

  mostraSaudacao() {
    this.data = new Date();
    this.horaCerta = this.data.getHours();
    this.saudacao = "";

    if (this.horaCerta < 12) {
      this.saudacao = "Bom dia!";
      return this.saudacao;
    }
    else if ((this.horaCerta >= 12) && (this.horaCerta <= 17)) {
      this.saudacao = "Boa tarde!";
      return this.saudacao;
    }
    else {
      this.saudacao = "Boa noite!";
      return this.saudacao;
    }
  }

  async mostrarBPM() {
    this.mensagem = "Medindo...";
    this.estado = "MEDINDO...";
    this.cor = "black";
    this.batimentos = 0;

    this.valores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (this.i = 0; this.i < 10; this.i++) {
      this.valores[this.i] = Math.floor(this.getRandomArbitrary(30, 260));

      this.batimentos = this.valores[this.i];
      await this.delay(1000);
    }

    if (this.tipoAnimal == "c") {
      if (this.pesoAnimal <= 10) {
        if (this.batimentos <= 70) {
          await this.delay(2000);
          this.estado = "MUITO BAIXO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito baixo!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else if (this.batimentos >= 180) {
          await this.delay(2000);
          this.estado = "MUITO ALTO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito alto!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else {
          this.estado = "REGULAR!";
          this.cor = "green";
        }
      }
      else if (this.pesoAnimal > 10) {
        if (this.batimentos <= 60) {
          await this.delay(2000);
          this.estado = "MUITO BAIXO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito baixo!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else if (this.batimentos >= 140) {
          await this.delay(2000);
          this.estado = "MUITO ALTO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito alto!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else {
          this.estado = "REGULAR!";
          this.cor = "green";
        }
      }
    }
    else if (this.tipoAnimal == "g") {
      if (this.pesoAnimal < 2) {
        if (this.batimentos <= 120) {
          await this.delay(2000);
          this.estado = "MUITO BAIXO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito baixo!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();

        }
        else if (this.batimentos >= 140) {
          await this.delay(2000);
          this.estado = "MUITO ALTO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito alto!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else {
          this.estado = "REGULAR!";
          this.cor = "green";
        }
      }
      else if (this.pesoAnimal > 2) {
        if (this.batimentos <= 200) {
          await this.delay(2000);
          this.estado = "MUITO BAIXO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito baixo!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else if (this.batimentos >= 300) {
          await this.delay(2000);
          this.estado = "MUITO ALTO!";
          this.cor = "red";

          let alert = this.alertCtrl.create({
            title: '<h1>Batimento muito alto!</h1>',
            message: '<p style="font-weight: bold">Isso pode indicar um problema.</p> <p style="font-weight: bold">Considere levar o seu amigo ao veterinário.</p> <p style="font-weight: bold">Aqui estão alguns veterinários próximos de você.</p>',
            buttons: [
              {
                text: 'Abrir mapa',
                //role: 'cancel',
                handler: () => {
                  this.navCtrl.push(MapaPage);
                  console.log('Abrindo mapa...');
                }
              },
            ]
          });
          alert.present();
        }
        else {
          this.estado = "REGULAR!";
          this.cor = "green";
        }
      }
    }

    this.mensagem = "Começar a medir";
    return this.batimentos;
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  nomeAnimal = localStorage.getItem(keyNome);
  tipoAnimal = localStorage.getItem(keyRaca);
  pesoAnimal = parseInt(localStorage.getItem(keyPeso));


}
