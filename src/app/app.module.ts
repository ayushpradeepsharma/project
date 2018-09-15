import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { HomeOnePage } from '../pages/home-one/home-one';
import { ItemDescriptionPage } from '../pages/item-description/item-description';
import { MyAccountPage } from '../pages/my-account/my-account';
import { MyOrderPage } from '../pages/my-order/my-order';
import { RateUsPage } from '../pages/rate-us/rate-us';
import { ShareUsPage } from '../pages/share-us/share-us';
import { LogoutPage } from '../pages/logout/logout';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CartPage } from '../pages/cart/cart';
import { AddressPage } from '../pages/address/address';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalsProvider } from '../providers/globals/globals';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    HomeOnePage,
    ItemDescriptionPage,
    MyAccountPage,
    MyOrderPage,
    RateUsPage,
    ShareUsPage,
    ContactUsPage,
    LogoutPage,
    MyProfilePage,
    CartPage,
    AddressPage,
    EditProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    HomeOnePage,
    ItemDescriptionPage,
    MyAccountPage,
    MyOrderPage,
    RateUsPage,
    ShareUsPage,
    ContactUsPage,
    LogoutPage,
    MyProfilePage,
    CartPage,
    AddressPage,
    EditProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalsProvider
  ]
})
export class AppModule {}
