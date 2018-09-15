import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  user: { name?:any,email?:any, address?:any, phoneNumber?:any}={};
  public profileForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController,public formBuilder:FormBuilder) {
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  initializeForm()
  {
    this.profileForm = this.formBuilder.group({
      name: ['',Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required])],
      address: ['',Validators.compose([Validators.required])],
      phoneNumber: ['',Validators.compose([Validators.required])],

    })
  }

  clickOnMenu()
  {
    this.menuCtrl.toggle();
  }

  clickOnName()
  {
    this.navCtrl.push(EditProfilePage,{itemOne:'name'});
  }

  clickOnAddress()
  {
    this.navCtrl.push(EditProfilePage,{itemTwo:'address'});
  }

  clickOnPhoneNumber()
  {
    this.navCtrl.push(EditProfilePage,{itemThree:'phoneNumber'})
  }

  clickOnEmail()
  {
    this.navCtrl.push(EditProfilePage,{itemFour:'email'});
  }
}
