import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomeOnePage } from '../home-one/home-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {

  }

ionViewDidLoad()
{
  this.menuCtrl.enable(false);
}

clickOnFacebook()
{
  console.log('Facebook click');
  this.navCtrl.push(HomeOnePage);
}

clickOnGoogle()
{
  console.log('Google clicked');
}

clickOnRegister()
{
  console.log('Register clicked');
  this.navCtrl.setRoot(RegisterPage);
}

}
