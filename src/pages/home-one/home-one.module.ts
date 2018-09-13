import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeOnePage } from './home-one';

@NgModule({
  declarations: [
    HomeOnePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeOnePage),
  ],
})
export class HomeOnePageModule {}
