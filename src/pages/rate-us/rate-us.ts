import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the RateUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate-us',
  templateUrl: 'rate-us.html',
})
export class RateUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateUsPage');
  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

}
