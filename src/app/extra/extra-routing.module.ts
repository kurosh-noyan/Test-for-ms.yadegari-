import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

import { ExtraPage } from './extra.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraPage
  },
  {
    path: ':id',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraPageRoutingModule {}
