import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'review', children: [{ path: '', loadChildren: '../review/ReviewDay.module#ReviewDayPageModule' }] },
      { path: 'history', children: [{ path: '', loadChildren: '../history/ReviewHistory.module#ReviewHistoryPageModule' }] },
      { path: '', redirectTo: '/tabs/review', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/review',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
