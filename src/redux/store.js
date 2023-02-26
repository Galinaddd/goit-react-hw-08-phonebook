import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { combineReducers } from 'redux';
import { authReduser } from './auth/slice';

export const rootReducer = combineReducers({
  auth: authReduser,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
