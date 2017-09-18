import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-page-detail',
  templateUrl: 'page-detail.html',
})
export class PageDetailPage {

  public params: string;
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams.get('params');
    this.title = navParams.get('title')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

}
