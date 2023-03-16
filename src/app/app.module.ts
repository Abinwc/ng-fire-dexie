import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuvszsWOLUk5rT7SjX9aoHtm7ANDQGPFg",
  authDomain: "madhan-fire.firebaseapp.com",
  projectId: "madhan-fire",
  storageBucket: "madhan-fire.appspot.com",
  messagingSenderId: "184506726674",
  appId: "1:184506726674:web:3d844021862cd9cdb31bcb",
  measurementId: "G-JMS3P563YG"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
