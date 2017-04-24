import { Business } from './business.model';

export interface AppStore {
  contacts: Business[];
  selectedContact: Business;
}