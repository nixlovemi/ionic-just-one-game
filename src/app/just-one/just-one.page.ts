import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-just-one',
  templateUrl: './just-one.page.html',
  styleUrls: ['./just-one.page.scss'],
})
export class JustOnePage implements OnInit {
  globalWords         = [];
  totGlobalWords      = 999999;

  showWord            = false;
  arrCards            = [];
  idxGame             = 0;
  gamePoints          = 0;
  private cCardImg    = 'assets/card.jpg';
  private cCardImgOk  = 'assets/card-ok.jpg';
  private cCardImgErr = 'assets/card-err.jpg';
  private nbrOfCards  = 13;

  constructor(
    private router: Router,
    private utilsSrv: UtilsService,
  ) { }

  ngOnInit() {
    this.globalWords    = this.utilsSrv.getGlobalWords();
    this.totGlobalWords = this.globalWords.length;
  }

  ionViewWillEnter() {
    this.onInitGame();
  }

  clickShowWord() {
    this.showWord = true;
  }

  onInitGame() {
    this.gamePoints = 0;
    this.getNewWords();
  }

  private changeCardImageOk(idx: number) {
    this.arrCards[idx].cardImg = this.cCardImgOk;
  }

  private changeCardImageErr(idx: number) {
    this.arrCards[idx].cardImg = this.cCardImgErr;
  }

  getNewWords() {
    const wordsAvailable = this.globalWords.length - this.utilsSrv.getUsedIdx().length;
    if ( wordsAvailable < this.nbrOfCards ) {
      this.utilsSrv.resetUsedIdx();
    }

    // tslint:disable-next-line: prefer-const
    let arrUsedIdx: number[] = this.utilsSrv.getUsedIdx();
    this.arrCards            = [];

    while ( this.arrCards.length < this.nbrOfCards ) {
      const randomIdx  = Math.floor( Math.random() * this.totGlobalWords );
      const isWordUsed = arrUsedIdx.includes(randomIdx);

      if ( !isWordUsed ) {
        const word = this.globalWords[randomIdx];
        this.arrCards.push({name: word, cardImg: this.cCardImg});
        arrUsedIdx.push(randomIdx);
      }
    }
  }

  private goNextCard(response: string) {
    const currentIdx = this.idxGame;
    this.showWord = false;
    this.idxGame++;

    if ( response === 'OK' ) {
      this.changeCardImageOk(currentIdx);
      this.gamePoints++;
    } else {
      this.changeCardImageErr(currentIdx);
      if ( response === 'ERR' && this.idxGame < this.arrCards.length ) {
        this.changeCardImageErr(currentIdx + 1);
        this.idxGame++;
      }
    }

    if ( this.idxGame >= this.arrCards.length ) {
      this.router.navigate(['just-one-ending/' + this.gamePoints], { skipLocationChange: true });
    }
  }

  onCorrectWord() {
    this.goNextCard('OK');
  }

  onWrongWord() {
    this.goNextCard('ERR');
  }

  onPassWord() {
    this.goNextCard('PASS');
  }

  resetGame() {
    this.utilsSrv.showAlert('Confirmação', '', 'Tem certeza que quer fechar o jogo em andamento?', [
      {
        text: 'Não',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Sim!',
        handler: () => {
          this.router.navigate([''], { skipLocationChange: true });
        }
      }
    ]);
  }
}
