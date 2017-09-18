import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrchextraPage } from './orchextra';

@NgModule({
  declarations: [
    OrchextraPage,
  ],
  imports: [
    IonicPageModule.forChild(OrchextraPage),
  ],
  providers: [
    OrchextraPage
  ]
})
export class OrchextraPageModule {}
