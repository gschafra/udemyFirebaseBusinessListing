import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Category } from '../../models/category.model';
import { Business } from '../../models/business.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../../models/appstore.model';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css'],
  providers: [FirebaseService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactslistComponent implements OnInit {
  //businesses: Business[];
  businesses: Observable<Array<Business>>;
  categories: Category[];
  constructor(private _firebaseService: FirebaseService, private _store: Store<AppStore>/*, private _cd: ChangeDetectorRef*/) { 
    /*this._firebaseService.getBusinesses().subscribe(
      businesses => {
        this.businesses = businesses;
        this._cd.markForCheck();
      }
    );*/
    //this.businesses = this._firebaseService.businesses;
    /*this._firebaseService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        this._cd.markForCheck();
      }
    );*/
    //console.log('yow');
    //this._firebaseService.loadBusinesses();

  }

  ngOnInit() {
  }

  changeState(state, key) {
    console.log('Changing state to: ' + state);
    if (key) {
      console.log('Changing key to: ' + key);
      //this.activeKey = key;
    }
    //this.appState = state;

  }
}
