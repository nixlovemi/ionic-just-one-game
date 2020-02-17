import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustOneEndingPage } from './just-one-ending.page';

const routes: Routes = [
  {
    path: '',
    component: JustOneEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustOneEndingPageRoutingModule {}
