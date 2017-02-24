import { ActionReducer, Action } from '@ngrx/store';
import { Business } from '../models/Business';

export const ADD_CONTACTS = 'ADD_CONTACTS';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export function contactsReducer(state: Business[] = [], action: Action) {
    console.log('contactsReducer');
    switch (action.type) {
        case ADD_CONTACTS:
            return action.payload;
        case REMOVE_CONTACT:
            break;
        default:
            return state;
    }
};


