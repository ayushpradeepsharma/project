import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  dataOne:any;
  dataTwo:any;
  dataThree:any;
  dataFour:any;
  nameBoolean:boolean=false;
  emailBoolean:boolean=false;
  phoneNumberBoolean:boolean=false;
  addressBoolean:boolean=false;
  name:any;
  address:any;
  email:any;
  phoneNumber:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataOne=this.navParams.get('itemOne');
    this.dataTwo=this.navParams.get('itemTwo');
    this.dataThree=this.navParams.get('itemThree');
    this.dataFour=this.navParams.get('itemFour');

    console.log("dataOne=",this.dataOne);
    console.log("dataTwo=",this.dataTwo);
    console.log("dataThree=",this.dataThree);
    console.log("dataFour=",this.dataFour);
    if(this.dataOne)
    {
      this.nameBoolean=true;
    }
    else if(this.dataTwo)
    {
      this.addressBoolean=true;
    }
    else if(this.dataThree)
    {
      this.phoneNumberBoolean=true;
    }
    else
    {
      this.emailBoolean=true;
    }
    console.log("nameboolean",this.nameBoolean);
    console.log("emailboolean",this.emailBoolean);
    console.log("addressboolean",this.addressBoolean);
    console.log("phoneNumberboolean",this.phoneNumberBoolean);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  clickOnSaveOne()
  {
    console.log('clicked on save');
    console.log(this.name);
  }

  clickOnSaveTwo()
  {
    console.log('clicked on save');
    console.log(this.email);
  }

  clickOnSaveThree()
  {
    console.log('clicked on save');
    console.log(this.address);
  }

  clickOnSaveFour()
  {
    console.log('clicked on save');
    console.log(this.phoneNumber);
  }

}
