import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyAw_q17_pxrVJztLBZ8FDqTbcQ2pzDXwVM",
  authDomain: "ng-fire-dexie-4ea74.firebaseapp.com",
  projectId: "ng-fire-dexie-4ea74",
  storageBucket: "ng-fire-dexie-4ea74.appspot.com",
  messagingSenderId: "528541288993",
  appId: "1:528541288993:web:d97b28b77d72df8887f160"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
