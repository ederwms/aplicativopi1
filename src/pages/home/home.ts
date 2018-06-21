import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { MapaPage } from '../mapa/mapa';
import { ConexaoPage } from '../conexao/conexao';

let keyNome: string = "nome";
let keyRaca: string = "raca";
let keyPeso: string = "peso";
//let hora:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mensagemAlerta: string = "<p>Isso pode indicar um problema.</p> <p>Considere levar o seu amigo ao veterinário.</p> <p>Aqui estão alguns veterinários próximos de você.</p>"

  podeReceber: boolean = false;

  saudacao: string;
  data: any;
  horaCerta: any;

  valores: any[];
  i: any;
  batimentoParcial: any = 0;
  batimentoFinal: any = 0;
  mensagem: string = "Começar a medir";
  estado: string = "AGUARDANDO...";
  corTexto: string = "black";
  corBotao: string = "default";

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private bluetoothSerial: BluetoothSerial) {
    this.bluetoothSerial.enable();
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

  //***************************************************************************************************************************************

  pararBPM() {
    console.log("Parei!");
    this.podeReceber = false;
  }

  async mostrarBPM() {
    this.podeReceber = true;
    this.mensagem = "Medindo...";
    this.estado = "MEDINDO...";
    this.corTexto = "black";
    this.corBotao = "default";

    console.log("Medindo...");
    this.valores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //***************************************************************************************************************************************

    // Atribui valores a variavel batimentos para que seja verificada posteriormente
    /*
    while (this.podeReceber == true) {
      this.batimentos = this.bluetoothSerial.read();

      await this.delay(1000);
    }

    
    */

    

    /*

    this.valores[this.i] = Math.floor(this.getRandomArbitrary(60, 80));

      this.batimentoParcial = this.valores[this.i];

      this.batimentoFinal = this.batimentoParcial;
    
    
    */

    for (this.i = 0; this.i < 10; this.i++) {
      this.bluetoothSerial.write('1');

      this.bluetoothSerial.subscribeRawData().subscribe((data) => {
        console.log(data);
        this.bluetoothSerial.read().then((data) => {
          if (data != "") {
            this.batimentoParcial = data;
            this.batimentoFinal = parseInt(this.batimentoParcial);
            //console.log("read" + data);
          }
        }, (error) => console.log(error));
      }, (error) => console.log(error));

      await this.delay(1300);
    }

    // **************************************************************************************************************************************
    //console.log("Parcial: " + this.batimentoParcial);
    //console.log("Final: " + this.batimentoFinal);
    //console.log("Final: " + this.batimentoFinal);


    // Verifica se o tipo escolhido no inicio do app é 'c' (cão)
    if (this.tipoAnimal == "c") {
      this.estado = "CALCULANDO...";
      await this.delay(2000);
      // Verifica o peso informado
      if (this.pesoAnimal <= 10) {
        // Verifica o valor que está guardado na variavel "batimentos"
        if (this.batimentoFinal <= 70) {

          this.estado = "MUITO BAIXO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito baixo!</h2>',
            message: this.mensagemAlerta,
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
        else if (this.batimentoFinal >= 180) {

          this.estado = "MUITO ALTO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito alto!</h2>',
            message: this.mensagemAlerta,
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
          this.corTexto = "green";
          this.corBotao = "secondary";
        }
      }
      else if (this.pesoAnimal > 10) {
        if (this.batimentoFinal <= 60) {

          this.estado = "MUITO BAIXO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito baixo!</h2>',
            message: this.mensagemAlerta,
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
        else if (this.batimentoFinal >= 140) {

          this.estado = "MUITO ALTO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito alto!</h2>',
            message: this.mensagemAlerta,
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
          this.corTexto = "green";
          this.corBotao = "secondary";
        }
      }
    }

    //***************************************************************************************************************************************

    // Verifica se o tipo escolhido no inicio do app é 'g' (gato)
    else if (this.tipoAnimal == "g") {
      this.estado = "CALCULANDO...";
      await this.delay(2000);
      // Verifica o peso informado
      if (this.pesoAnimal < 2) {
        // Verifica o valor que está guardado na variavel "batimentos"
        if (this.batimentoFinal <= 120) {

          this.estado = "MUITO BAIXO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito baixo!</h2>',
            message: this.mensagemAlerta,
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
        else if (this.batimentoFinal >= 140) {

          this.estado = "MUITO ALTO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito alto!</h2>',
            message: this.mensagemAlerta,
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
          this.corTexto = "green";
          this.corBotao = "secondary";
        }
      }
      else if (this.pesoAnimal > 2) {
        if (this.batimentoFinal <= 200) {

          this.estado = "MUITO BAIXO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito baixo!</h2>',
            message: this.mensagemAlerta,
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
        else if (this.batimentoFinal >= 300) {

          this.estado = "MUITO ALTO!";
          this.corTexto = "red";
          this.corBotao = "danger";

          let alert = this.alertCtrl.create({
            title: '<h2>Batimento muito alto!</h2>',
            message: this.mensagemAlerta,
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
          this.corTexto = "green";
          this.corBotao = "secondary";
        }
      }
    }

    this.mensagem = "Medir novamente";
    return this.batimentoFinal;
  }

  irParaConexao() {
    this.navCtrl.push(ConexaoPage);
  }


  // Função usada para "fazer o app esperar para mostrar algo na tela"
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Função usada para randomizar um numero
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  nomeAnimal = localStorage.getItem(keyNome);
  tipoAnimal = localStorage.getItem(keyRaca);
  pesoAnimal = parseInt(localStorage.getItem(keyPeso));


}
