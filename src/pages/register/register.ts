import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: { email? : any, password?: any, phone?: any, name?:any }={};
  public registerForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  initializeForm()
  {
    this.registerForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])],
      name: ['',Validators.compose([Validators.required])],
      phone: ['',Validators.compose([Validators.required])],
    })
  }

  clickOnRegister()
  {
    console.log(this.registerForm.value);
  }

}
