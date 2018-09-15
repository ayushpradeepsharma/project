import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

import { GlobalsProvider } from '../../providers/globals/globals';

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
      {date:'01/05/2018',amount:'2000',itemCount:'5'},
      {date:'22/05/2018',amount:'200',itemCount:'5'},
      {date:'14/06/2018',amount:'1600',itemCount:'5'},
      {date:'17/06/2018',amount:'2200',itemCount:'5'},
      {date:'22/06/2018',amount:'700',itemCount:'5'}
      
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrderPage');
  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

}
