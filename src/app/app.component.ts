import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyAccountPage } from '../pages/my-account/my-account';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyOrderPage } from '../pages/my-order/my-order';
import { RateUsPage } from '../pages/rate-us/rate-us';
import { ShareUsPage } from '../pages/share-us/share-us';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LogoutPage } from '../pages/logout/logout';
import { HomeOnePage } from '../pages/home-one/home-one';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Account', component: MyAccountPage },
      { title: 'My Profile', component: MyProfilePage },
      { title: 'My Order', component: MyOrderPage },
      { title: 'Items', component: HomeOnePage },
      { title: 'Rate Us', component: RateUsPage },
      { title: 'Share Us', component: ShareUsPage },
      { title: 'Contact Us', component: ContactUsPage },
      { title: 'Logout', component: LogoutPage },
     
      

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
