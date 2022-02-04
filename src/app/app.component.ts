import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private utilsSrv: UtilsService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.loadWords();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private loadWords() {
    let isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
    let filePath = '../../assets/json-words.json';
    if (!isApp) {
      filePath = 'assets/json-words.json';
    }

    fetch(filePath).then(res => res.json()).then(jsonCards => {
      this.utilsSrv.setGlobalWords(jsonCards);
    });
  }
}
