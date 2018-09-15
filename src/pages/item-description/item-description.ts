import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the ItemDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-description',
  templateUrl: 'item-description.html',
})
export class ItemDescriptionPage {  
  data:any;
  count:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get('card');
    console.log(this.data);
    this.count=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDescriptionPage');
  }

  clickOnAddToCart()
  {
    console.log("Add to cart clicked");
    console.log(this.count);
  }

  clickOnCart()
  {
    console.log("clicked on cart");
    this.navCtrl.push(CartPage);
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

}
