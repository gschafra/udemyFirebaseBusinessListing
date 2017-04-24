import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Business } from './models/business.model';
import { AppStore } from './models/appstore.model';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  appState: string;
  activeKey: string;
  businesses: Observable<Array<Business>>;

  constructor(private _firebaseService: FirebaseService, private _store: Store<AppStore>) {
    this.businesses = _store.select('contacts');
    this.businesses.subscribe(v => console.log(v));
    this._firebaseService.loadBusinesses();
  }

  ngOnInit() {}

  changeState(state, key) {
    console.log('Changing state to: ' + state);
    if (key) {
      console.log('Changing key to: ' + key);
      this.activeKey = key;
    }
    this.appState = state;

  }
}
