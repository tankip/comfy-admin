import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';

import { StatusBar, Splashscreen, Network} from 'ionic-native';

import {Data} from '../providers/data';
import { NetworkService } from '../providers/network';

import { HomePage } from '../pages/home/home';
import { TodaypicksPage } from '../pages/todaypicks/todaypicks';
import { AllgamesPage } from '../pages/allgames/allgames';
import { AboutPage  } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html',
  providers: [Data, NetworkService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  connection: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private alertCtrl: AlertController,
    private _data : Data
  ) {
    
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Today\'s Tips', component: TodaypicksPage },
      { title: 'Last Won Tips', component: AllgamesPage },
      { title: 'About Us', component: AboutPage },
      { title: 'Contact Us', component: ContactPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      Network.onDisconnect().subscribe(() => {
        let alert = this.alertCtrl.create({
          subTitle: 'Please ensure you have an internet connection!',
          buttons: ['OK']
        });
        alert.present();
      });
    });
  }
  

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
