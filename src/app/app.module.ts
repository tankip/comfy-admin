import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {Data} from '../providers/data';
import { NetworkService } from '../providers/network';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { TodaypicksPage } from '../pages/todaypicks/todaypicks';
import { AllgamesPage } from '../pages/allgames/allgames';
import { AboutPage  } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodaypicksPage,
    AllgamesPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodaypicksPage,
    AllgamesPage,
    AboutPage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, NetworkService]
})
export class AppModule {}
