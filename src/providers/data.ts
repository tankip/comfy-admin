import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { Network } from 'ionic-native';

@Injectable()
export class Data {

  private _loadedGames: any;
  private _db: any;
  private _gamesRef: any;
  private _connectedRef: any;
  private _provider: any;

  public isLogged: any;

  constructor(public http: Http) {
     this._db = firebase.database().ref('/');
     this._gamesRef = firebase.database().ref('games'); 
     this._provider = new firebase.auth.GoogleAuthProvider();
     this._gamesRef.orderByKey().on('value', this.handleData, this);
     this._loadedGames = new ReplaySubject();
  }

  get games() {
    return this._loadedGames;
  }

  signIn() {
    firebase.auth().signInWithRedirect(this._provider);
  }

  checkAuth() {
    let user = firebase.auth().currentUser;
    if (user) {
      return user;
    } else {
      return null;
    }

  }

  save(game) {
    return this._gamesRef.push(game).key;
  }

  updateGame(key, rest) {

    let res = this._gamesRef.child(key + '/result');
    res.set(rest);
  }

  handleData(snap) {
    try {
      this._loadedGames.next(snap);
    } catch (error) {
      console.info('catching', error);
    }
  }

}
