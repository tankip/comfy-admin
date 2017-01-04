import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Data} from '../../providers/data';

@Component({
  selector: 'page-todaypicks',
  templateUrl: 'todaypicks.html'
})
export class TodaypicksPage {

  public allgames: any[];
  public todaygames: any[];
  public gamesLength: boolean;

  constructor(public navCtrl: NavController, private _data: Data) {
    let that = this;
    this._data.games.subscribe((data) => {
      if(data) {
        that.allgames = data;
        let arr = [];
        that.allgames.forEach((value) => {
          if(value.val().result == 'Pending') {
            arr.push({ 
              data: value.val(),
              key: value.key
            });
          }
        });
        that.todaygames = arr.reverse();
        if(that.todaygames.length > 0) {
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
