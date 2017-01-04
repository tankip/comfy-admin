import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Alert, NavController} from 'ionic-angular';
import { Network } from 'ionic-native';

@Injectable()
export class NetworkService {
  connection;

  constructor(public http: Http) {
    console.log('Hello Network Provider');
    this.connection = this.checkConnection();
  }
  checkConnection() {
    Network.onConnect().subscribe((response) => {
        return response.type;
    });
    Network.onDisconnect().subscribe((response) => {
        return response.type;
    });
  }

}
