import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fire-dexie';

  create(){
    console.log("create a firebase collections and add records to it")
  }


  fetch(){
    console.log("fetch the collection data")
  }
}
