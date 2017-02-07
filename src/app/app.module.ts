import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { ContactslistComponent } from './components/contactslist/contactslist.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAb9PDnIJwzOeJL5l6bGS3nJfBfHCJFg10',
  authDomain: 'project-5214608446069991723.firebaseapp.com',
  databaseURL: 'https://project-5214608446069991723.firebaseio.com',
  storageBucket: 'project-5214608446069991723.appspot.com',
  messagingSenderId: '104701499060'
};

@NgModule({
  declarations: [
    AppComponent,
    ContactslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
