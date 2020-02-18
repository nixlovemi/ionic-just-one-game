import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  globalWords = [];
  usedIdx     = [];

  constructor(
    private alertCtr: AlertController,
    private loadingCtr: LoadingController,
    private storage: Storage,
    public platform: Platform,
  ) { }

  getGlobalWords() {
    return this.globalWords;
  }

  setGlobalWords(arrWords) {
    this.globalWords = arrWords;
  }

  resetUsedIdx() {
    this.usedIdx = [];
  }

  getUsedIdx() {
    return this.usedIdx;
  }

  addUsedIdx(idx: number) {
    this.usedIdx.push(idx);
  }

  getAppVersion() {
    return '1.1.0';
  }

  getStrFinalPoints(totalPoints: number) {
    if ( totalPoints <= 3 ) {
      return 'Tentem de novo, de novo e de novo.';
    } else if ( totalPoints <= 6 ) {
      return 'É um bom começo, tentem de novo!';
    } else if ( totalPoints <= 8 ) {
      return 'Nem bom, nem ruim. Que tal melhorar?';
    } else if ( totalPoints <= 10 ) {
      return 'Uau! Nada mal, hein?';
    } else if ( totalPoints <= 11 ) {
      return 'Ótimo! Este resultado merece ser comemorado.';
    } else if ( totalPoints <= 12 ) {
      return 'Incrível! Vocês devem estar impressionados.';
    } else {
      return 'Perfeito! Vocês conseguem repetir esta façanha?';
    }
  }

  async showAlert(header: any, subHeader: any, message: any, buttons: any) {
    const alert = await this.alertCtr.create({
      header,
      subHeader,
      message,
      buttons,
    });
    return await alert.present();
  }

  async getLoader(message, spinner) {
    return await this.loadingCtr.create({
      message,
      spinner,
    }).then((res) => {
      res.present();

      const TIME_IN_MS = 3000;
      const hideFooterTimeout = setTimeout( () => {
        this.closeLoader();
      }, TIME_IN_MS);
    });
  }

  async closeLoader() {
    try {
      return await this.loadingCtr.dismiss();
    } catch (err) {
      return;
    }
  }

  /*
  date: tem que ser no formato ISO String (new Date().toISOString())
  2011-10-05T14:48:00.000Z
  */
  formatDate(date: string, format= 'YYYY-MM-DD') {
    const strDate = '' + date.replace('Z', '');
    const ano     = strDate.substr(0, 4);
    const mes     = strDate.substr(5, 2);
    const dia     = strDate.substr(8, 2);
    const hora    = strDate.substr(11, 2);
    const minuto  = strDate.substr(14, 2);
    const segundo = strDate.substr(17, 2);

    // tslint:disable-next-line: max-line-length
    const strDateFmt  = format.replace('YYYY', ano).replace('MM', mes).replace('DD', dia).replace('HH', hora).replace('MI', minuto).replace('SS', segundo);
    return strDateFmt;
  }

  /*
  * valor: valor desejado para a formatação
  * decimais: quantidade de casas decimais, por padrão será 2
  * simbolo: tipo de moeda, por padrão é vazia
  */
  formatMoney(valor, decimais = 2, simbolo = '') {
    if (isNaN(valor)) { return ''; } else {
      const vValor = parseFloat(valor);
      const numero = vValor.toFixed(decimais).split('.');
      numero[0] = simbolo + numero[0].split(/(?=(?:...)*$)/).join('.');
      return numero.join(',');
    }
  }

  acerta_moeda(valor: string) {
    return parseFloat( valor.replace('.', '').replace(',', '.') );
  }

  showBanner() {
    /*let adId;
    if (this.platform.is('android')) {
      // adId = 'ca-app-pub-3940256099942544/6300978111'; // ID de testes
      adId = 'ca-app-pub-9051401060868246/4952405598';
    } else if (this.platform.is('ios')) {
      // adId = 'ca-app-pub-3940256099942544/2934735716'; // ID de testes
      adId = 'ca-app-pub-9051401060868246/4110097217';
    }
    this.admob.createBanner({
      adId: adId,
      isTesting: false // remove in production
    })
    .then(() => {
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
    })
    .catch((err) => {
      console.log(err);
    });*/
  }
}
