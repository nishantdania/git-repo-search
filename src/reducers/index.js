import { combineReducers } from 'redux';
import searchResults from './searchResults';

const gitSearch = combineReducers({
  searchResults,
});

export default gitSearch;
