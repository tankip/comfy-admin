import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allgames: any[];
  public bestgames: any[];
  public gamesLength: boolean;

  constructor(public navCtrl: NavController, private _data: Data) {
    let that = this;
    this._data.games.subscribe((data) => {
      if(data) {
        that.allgames = data;
        let arr = [];
        that.allgames.forEach((value) => {
          if(value.val().pick == 'best' && value.val().result == 'Pending') {
            arr.push({ 
              data: value.val(),
              key: value.key
            });
          }
        });
        that.bestgames = arr.reverse();
        if(that.bestgames.length > 0) {
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
