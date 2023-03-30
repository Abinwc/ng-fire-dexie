import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppDb } from './service/db';
import { StudentsComponent } from './students/students.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAB7CRKN5w6L3s9eX2cQ4Gtjga1Apf5TX0',
  authDomain: 'ng-fire-dexie.firebaseapp.com',
  projectId: 'ng-fire-dexie',
  storageBucket: 'ng-fire-dexie.appspot.com',
  messagingSenderId: '1072073376593',
  appId: '1:1072073376593:web:b9ac6d7ead038d22d60970',
  measurementId: 'G-FGGK17P44Z',
};

@NgModule({
  declarations: [AppComponent, StudentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [AppDb],
  bootstrap: [AppComponent],
})
export class AppModule {}
