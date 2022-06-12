import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
