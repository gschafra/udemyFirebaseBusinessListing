import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Category } from '../../models/Category';
import { Business } from '../../models/Business';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css'],
  providers: [FirebaseService]
})
export class ContactslistComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getBusinesses().subscribe(
      businesses => {
        this.businesses = businesses;
      }
    );
    this._firebaseService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }
}