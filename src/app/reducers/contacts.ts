import { ActionReducer, Action } from '@ngrx/store';
import { Business } from '../models/business.model';

export const ADD_CONTACTS = 'ADD_CONTACTS';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';

export function contactsReducer(state: any = [], action: Action): Business[] {
    console.log('contactsReducer');
    switch (action.type) {
        case ADD_CONTACTS:
            return [...action.payload];
        case ADD_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_CONTACT:
            break;
        default:
            return state;
    }
};


