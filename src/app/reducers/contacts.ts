import { ActionReducer, Action } from '@ngrx/store';

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export function contactsReducer(state: any = [], action: Action) {
    switch (action.type) {
        case ADD_CONTACT:
            break;
        case REMOVE_CONTACT:
            break;
        default:
            return state;
    }
};


