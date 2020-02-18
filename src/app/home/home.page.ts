import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  openGame() {
    this.navCtrl.navigateForward('/just-one');
  }

  openRules() {
    this.navCtrl.navigateForward('/rules');
  }

}
