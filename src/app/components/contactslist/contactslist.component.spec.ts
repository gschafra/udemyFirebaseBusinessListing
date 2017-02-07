/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactslistComponent } from './contactslist.component';

describe('ContactslistComponent', () => {
  let component: ContactslistComponent;
  let fixture: ComponentFixture<ContactslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});