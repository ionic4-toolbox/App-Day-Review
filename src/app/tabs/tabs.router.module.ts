import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ReviewDay',
        children: [
          {
            path: '',
            loadChildren: '../ReviewDay/ReviewDay.module#ReviewDayPageModule'
          }
        ]
      },
      {
        path: 'ReviewHistory',
        children: [
          {
            path: '',
            loadChildren: '../ReviewHistory/ReviewHistory.module#ReviewHistoryPageModule'
          }
        ]
      },
      {
        path: 'Settings',
        children: [
          {
            path: '',
            loadChildren: '../Settings/Settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/ReviewDay',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ReviewDay',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
