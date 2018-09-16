import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

import { GlobalsProvider } from '../../providers/globals/globals';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the MyOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html',
})
export class MyOrderPage {

  orders: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController,
  public globals:GlobalsProvider) {
    this.orders=[
      {restaurent:'ABC restaurent',place:'Vaishali',date:'30 Aug 2018',order:'One Shahi Paneer and 2 Butter naan',amount:'400'},
      {restaurent:'Zaika',place:'Vasundra restaurent',date:'12 Aug 2018',order:'One chicken kabaab and 2 Butter naan',amount:'750'},
      {restaurent:'Punjabi Zaika restaurent',place:'Ghaziabad',date:'23 Aug 2018',order:'One Malai Kofta and 2 Butter naan',amount:'630'},
      {restaurent:'YOurs restaurent',place:'Vaishali',date:'19 Aug 2018',order:'One Shahi Paneer and 2 Butter naan',amount:'470'},
      {restaurent:'Dominos restaurent',place:'Gaur Mall',date:'4 Aug 2018',order:'One regular pizza and 2 cold drinks',amount:'490'},
      {restaurent:'Pizza Hut restaurent',place:'Vaishali',date:'1 Aug 2018',order:'Three medium pan pizza',amount:'800'},

      
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrderPage');
  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

  clickOnCart()
  {
    this.navCtrl.push(CartPage);
  }

}
