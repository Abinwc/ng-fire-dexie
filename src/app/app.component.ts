import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private adb:AngularFireDatabase){}
  title = 'ng-fire-dexie';

  addItems = new FormGroup({
    input: new FormControl('',Validators.required),
  })


  pushData(){
    this.adb.database.ref('/inputs').push(this.addItems.value)
    // console.log(this.addItems.value)
  }

  getData(){
    //to fetch the code
  }
}
