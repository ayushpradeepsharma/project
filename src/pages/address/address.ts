import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

import { GlobalsProvider } from '../../providers/globals/globals';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  address:any;
  modeOfPayment:any;
  cash:boolean=false;
  paytm:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public globals:GlobalsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
    console.log(this.globals.cartCount);
  }

  clickOnCart()
  {
    console.log("clicked on cart");
    this.navCtrl.push(CartPage);
  }

  changeMode()
  {
    if(this.modeOfPayment=='cash')
    {
      this.cash=true;
      console.log("cash",this.cash);
    }
    else if(this.modeOfPayment=='paytm')
    {
      this.paytm=true;
      console.log("paytm",this.paytm);
    }
    
  }

  clickOnPay()
  {
    console.log('Clicked On Pay');
  }

}
