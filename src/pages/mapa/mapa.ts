import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

declare var google;
let janelaInfo;

/*
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map: any;
  opcoes: GeolocationOptions;
  posicaoAtual: Geoposition;
  places: Array<any>;

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private _ngZone: NgZone) {

  }

  adicionaMapa(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);

    let opcoesMapa = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, opcoesMapa);
    janelaInfo = new google.maps.InfoWindow();

    this.achaVet(latLng).then((results : Array<any>)=>{
      this.places = results;
      for(let i = 0 ;i < results.length ; i++) {
        this.marcadorVet(results[i]);
      }
  },(status)=>console.log(status));
    this.adicionaMarcador();
  }

  adicionaMarcador() {
    let marcador = new google.maps.Marker({
      map: this.map,
      icon: 'assets/imgs/pessoa.png',
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let conteudo = "<p>Esta é a sua posição atual.</p>";
    let janelaInfo = new google.maps.InfoWindow({
      content: conteudo,
      maxWidth: 200
    });

    google.maps.event.addListener(marcador, 'click', () => {
      janelaInfo.open(this.map, marcador);
    });

  }

  achaPessoa() {
    this.opcoes = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.opcoes).then((pos: Geoposition) => {
      this.posicaoAtual = pos;
      console.log(pos);
      this.adicionaMapa(pos.coords.latitude, pos.coords.longitude);

    }, (err: PositionError) => {
      console.log("error: " + err.message);
    });
  }

  achaVet(latLng) {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 2000,
      keyword: 'veterinária',
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }

      });
    });
  }

  marcadorVet(lugar) {
    let marcadorVet = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: lugar.geometry.location,
      icon: 'assets/imgs/veterinary.png'
    });

    google.maps.event.addListener(marcadorVet, 'click', function() {
      let latituteLugar = lugar.geometry.location.lat();
      let longitudeLugar = lugar.geometry.location.lng();
      let idLugar = lugar.place_id;

     let conteudo = '<div> <strong>' + lugar.name + '</strong> <br> ' + lugar.vicinity + '</div> ';
     let janelaInfo = new google.maps.InfoWindow({
       content: conteudo,
       maxWidth: 200
     });

     janelaInfo.open(this.map, this);

    });
  }

  tracarRota() {
    console.log("Chamou a função!!");
  }

  callback(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        this.marcadorVet(results[i]);
      }
    }
  }

  ionViewDidEnter() {
    this.achaPessoa();
  }
}
