import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalsProvider {

  cartCount:any=0;

  constructor() {
    console.log('Hello GlobalsProvider Provider');
  }

}
