import { ActionReducer, Action } from '@ngrx/store';

export const EDIT = 'EDIT';

export function selectedContactReducer(state: any = null, action: Action) 
{
  switch (action.type) {
    case EDIT:
        break;
    default:
      return state;
  }
};
