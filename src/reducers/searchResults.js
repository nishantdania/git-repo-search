import { SEARCH } from '../actions/constants';

const searchResults = (state = {
}, action) => {
  switch (action.type) {
    case SEARCH.SEARCH_SUCCESS: {
      var { data } = action; 
      var { page, keyword, result } = data || {};
      return {
        ...state,
        [keyword]: {
          ...state[keyword],
          [page]: {  
            result
          }
        }
      };}
    case SEARCH.SEARCH_EXTRA_SUCCESS: {
      var { data } = action; 
      var { page, keyword, result } = data || {};
      return {
        ...state,
        [keyword]: {
          ...state[keyword],
          [page]: {  
            result
          }
        }
      };}
    default:
      return state;
  }
};

export default searchResults;
