import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { ItemDescriptionPage } from '../item-description/item-description';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the HomeOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-one',
  templateUrl: 'home-one.html',
})
export class HomeOnePage {

  todays:any=[];
  popular:any=[];
  allDishes:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeOnePage');
    this.menuCtrl.enable(true);
    this.todays.push(1,2,3,4,5,6,7,8);
    this.popular.push(1,2,3,4,5,6,7,8);
    this.allDishes.push(1,2,3,4,5,6,7,8);

  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

  clickOnCart()
  {
    console.log("Cart clicked");
    this.navCtrl.push(CartPage);
  }

  clickOnAllDishes(card)
  {
    console.log("clicked on all dishes");
    this.navCtrl.push(ItemDescriptionPage,{card:card});
  }

  clickOnPopular(card)
  {
    console.log("clicked on popular dishes");
    this.navCtrl.push(ItemDescriptionPage,{card:card});
  }

  clickOnToday(card)
  {
    console.log("clicked on today's special dishes");
    this.navCtrl.push(ItemDescriptionPage,{card:card});
  }

}
