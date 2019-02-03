import { Component, ViewChild } from '@angular/core';
import {
  Router
} from '@angular/router';

import { IonRouterOutlet,Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    platform.backButton.subscribe(async ()=>{
      try{
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        }
        else if (this.router.url === '/tabs/ReviewDay') {
          navigator["app"].exitApp();
        } 
      }
      catch (error) {

      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
