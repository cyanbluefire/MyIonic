import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpGet } from '../../providers/http-get';
import { HttpUrl } from '../../common/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  searchInput: string = "";
  browser;

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private http: HttpGet) {
    // this.create();

  }
  create() {
    this.browser = this.iab.create('https://www.baidu.com');

  }
}
