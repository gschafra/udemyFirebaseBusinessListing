import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Business } from '../models/Business';
import { Category } from '../models/Category';
import { Store } from '@ngrx/store';

@Injectable()
export class FirebaseService {
    //businesses: FirebaseListObservable<Business[]>;
    businesses: Observable<Array<Business>>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _af: AngularFire, private _store: Store<Business>) {
        //this.businesses = this._af.database.list('/businesses');
        this.businesses = this._store.select('contacts');
    }

    getBusinesses() {
        //this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>;
        this.businesses = this._af.database.list('/businesses');
        return this.businesses;
    }

    loadBusinesses() {
        console.log('loadBusinesses');
        this._af.database.list('/businesses').subscribe((businesses: Business[]) => {
            console.log(businesses);
            this._store.dispatch({type: 'ADD_CONTACTS', payload: businesses});
        });
    }

    getCategories() {
        this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;
    }

}
