import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePageModule } from './../pages/welcome/welcome.module';
import { OrchextraPageModule } from './../pages/orchextra/orchextra.module';
import { AboutusPageModule } from './../pages/aboutus/aboutus.module';
import { ProjectsPageModule } from './../pages/projects/projects.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    WelcomePageModule,
    OrchextraPageModule,
    AboutusPageModule,
    ProjectsPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
