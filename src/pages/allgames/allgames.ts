import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from '../../providers/data';

@Component({
  selector: 'page-allgames',
  templateUrl: 'allgames.html'
})
export class AllgamesPage {

  public allgames: any[];
  public lastgames: any[];
  public gamesLength: boolean;

  constructor(public navCtrl: NavController, private _data: Data) {
    let that = this;
    this._data.games.subscribe((data) => {
      if(data) {
        that.allgames = data;
        let arr = [];
        that.allgames.forEach((value) => {
          if(value.val().result == 'Won') {
            arr.push({ 
              data: value.val(),
              key: value.key
            });
          }
        });
        that.lastgames = arr.reverse();
        if(that.lastgames.length > 0) {
          this.gamesLength = true;
        } else {
          this.gamesLength = false;
        }
      }
    }, (err) => {
      console.error(err);
    });
  }

  ionViewDidLoad() {
  }

}
