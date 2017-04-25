import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { initNative, initData, globalVar, initFunction, isLogin } from '../common/global';
import { TabsPage } from '../pages/tabs/tabs';

// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // if (!isLogin()) {
      //   this.rootPage = LoginPage;
      // }

      StatusBar.styleDefault();
      this.init();
    });
  }

  init() {
    if (globalVar.isDevice) {
      Splashscreen.hide();
      (<any>window).navigator.splashscreen.hide();
      initNative();
    }
    initFunction();
  }

}
