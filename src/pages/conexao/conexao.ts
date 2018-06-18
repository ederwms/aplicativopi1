import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConexaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conexao',
  templateUrl: 'conexao.html',
})
export class ConexaoPage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }

  startScanning() { // Essa função busca os aparelhos bluetooth próximos e retorna uma lista.
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => { // Esse comando busca os dispositivos.
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => { // Aqui temos a lista de disposivivos
      this.pairedDevices = success;
    },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) { // Quando eu selecionar um dispositivo vai me perguntar

    let alert = this.alertCtrl.create({ // se eu quero conectar a ele criando um "alert" na tela
      title: 'Conectar',
      message: 'Você quer se conectar com esse dispositivo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar selecionado');
          }
        },
        {
          text: 'Conectar',
          handler: () => { // se eu clicar em conectar vai executar a função abaixo: "connect()"
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  disconnect() { // Quando eu quiser desconectar basta clicar no botao e então...
    let alert = this.alertCtrl.create({
      title: 'Desconectar?',
      message: 'Você quer se desconectar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar selecionado');
          }
        },
        {
          text: 'Desconectar',
          handler: () => {
            this.bluetoothSerial.disconnect(); // ... irá executar a função "disconnect()"
          }
        }
      ]
    });
    alert.present();
  }

}
