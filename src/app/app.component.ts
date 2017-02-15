import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Business } from './models/Business';

export interface AppState {
  contacts: Business[];
  selectedContact: Business;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appState: string;
  activeKey: string;

  constructor(private store: Store<AppState>) {
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
