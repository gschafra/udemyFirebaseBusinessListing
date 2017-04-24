import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Business } from '../models/business.model';
import { Category } from '../models/category.model';
import { Store } from '@ngrx/store';
import { ADD_CONTACTS } from '../reducers/contacts';

@Injectable()
export class FirebaseService {
    //businesses: FirebaseListObservable<Business[]>;
    businesses: Observable<Array<Business>>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _af: AngularFire, private _store: Store<Business>) {
        //this.businesses = this._af.database.list('/businesses');
        this.businesses = _store.select('contacts');
        this.businesses.subscribe(v => console.log(v));
    }

    getBusinesses() {
        //this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>;
        this.businesses = this._af.database.list('/businesses');
        return this.businesses;
    }

    loadBusinesses() {
        console.log('loadBusinesses');
        const that = this;
        const initialBusinesses: Business[] = [
            {company: 'Konstanz', created_at: 'blub', category: 'test'}
          // ITEM OBJECTS HERE
        ];
        this._store.dispatch({type: ADD_CONTACTS, payload: initialBusinesses});
        /*this._af.database.list('/businesses').subscribe((businesses: Business[]) => {
            console.log('beforeDispatch');
            console.log(businesses);
            that._store.dispatch({type: ADD_CONTACTS, payload: businesses});
        });*/
    }

    getCategories() {
        this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;
    }

}
