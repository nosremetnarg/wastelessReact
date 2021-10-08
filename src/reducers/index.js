import { combineReducers } from 'redux';

import auth from './auth';

export default function rootReducer () {
  return combineReducers({
    auth,
  });
}