import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../utils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-just-one-ending',
  templateUrl: './just-one-ending.page.html',
  styleUrls: ['./just-one-ending.page.scss'],
})
export class JustOneEndingPage implements OnInit {
  totalPoints = 0;
  finalText   = '';

  constructor(
    private actRoute: ActivatedRoute,
    private utilsSrv: UtilsService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.actRoute.params.subscribe((res) => {
      if ( typeof res.totalPoints !== 'undefined' ) {
        this.totalPoints = res.totalPoints; // vem undefined qdo n tem param | tento deixar 0 default | pode vir texto
      }

      this.finalText = this.utilsSrv.getStrFinalPoints(this.totalPoints);
    });
  }

  resetGame() {
    this.navCtrl.navigateBack('/');
  }

}
