import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChartModule } from 'angular2-highcharts';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpGet } from '../providers/http-get';
import { OrderBy } from '../pipes/order-by';
import { JsonpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OrderBy,

  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'ios',
      tabsHideOnSubPages: 'true',
      mode:'ios',
    }),
    JsonpModule,
  ],
  bootstrap: [IonicApp, MyApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, InAppBrowser, HttpGet]
})
export class AppModule { }
