import {combineReducers} from 'redux';
import contactsReducer from './contactReducer';
import toWatchReducer from './toWatchreducer';

export default combineReducers({
  contactsList: contactsReducer,
  toWatchList: toWatchReducer
})