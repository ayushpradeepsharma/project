import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddressPage } from '../address/address';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  count:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.count=1;
  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

  clickOnAdd()
  {
    this.count++;
  }

  clickOnRemove()
  {
    if(this.count==1)
    {
      this.count=1;
    }
    else
    {
      this.count--;
    }
  }

  clickOnCheckout()
  {
    this.navCtrl.push(AddressPage);
  }

}
