import { combineReducers } from 'redux';
import searchResults from './searchResults';
import loading from './loading';

const gitSearch = combineReducers({
  searchResults,
  loading
});

export default gitSearch;
