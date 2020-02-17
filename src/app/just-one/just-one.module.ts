import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustOnePageRoutingModule } from './just-one-routing.module';

import { JustOnePage } from './just-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustOnePageRoutingModule
  ],
  declarations: [JustOnePage]
})
export class JustOnePageModule {}
