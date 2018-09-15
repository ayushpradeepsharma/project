import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController } from 'ionic-angular';
import { AddressPage } from '../address/address';

import { GlobalsProvider } from '../../providers/globals/globals';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController,
    public globals:GlobalsProvider,public alertCtrl:AlertController,public toastCtrl:ToastController) {
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

  clickOnAddMoreItems()
  {
    console.log("Add to cart clicked");
    console.log(this.count);
    // let alert = this.alertCtrl.create({
    //   title: 'Added to Cart',
    //   message: 'Item is added to card Successfully',
    //   buttons:[
    //     {
    //       text:'Ok',
    //       role:'cancel',
    //     }
    //   ]
    // });
    let toast = this.toastCtrl.create({
      message: 'added to Cart successfully',
      duration: 3000,
      position: 'middle'
    })
    toast.present();
    this.globals.cartCount=this.globals.cartCount+this.count;
    console.log(this.globals.cartCount);
  }

}
