import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import eRestaurant from './eRestaurantReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  eRestaurant
});

export default rootReducer;