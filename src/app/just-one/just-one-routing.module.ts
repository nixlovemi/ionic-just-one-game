import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustOnePage } from './just-one.page';

const routes: Routes = [
  {
    path: '',
    component: JustOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustOnePageRoutingModule {}
