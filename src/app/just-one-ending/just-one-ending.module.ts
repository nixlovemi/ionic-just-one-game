import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustOneEndingPageRoutingModule } from './just-one-ending-routing.module';

import { JustOneEndingPage } from './just-one-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustOneEndingPageRoutingModule
  ],
  declarations: [JustOneEndingPage]
})
export class JustOneEndingPageModule {}
