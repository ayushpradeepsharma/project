import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDescriptionPage } from './item-description';

@NgModule({
  declarations: [
    ItemDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDescriptionPage),
  ],
})
export class ItemDescriptionPageModule {}
