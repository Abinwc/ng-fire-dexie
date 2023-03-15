import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore){
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  title = 'ng-fire-dexie';

  create(){
    this.itemsCollection.doc('item2').set({
      id: '1',
      name: 'Iphone',
      quantity: '1',
      price: 850000
    })
    console.log("create a firebase collections and add records to it")
  }


  fetch(){
    console.log("fetch the collection data")
  }
}
