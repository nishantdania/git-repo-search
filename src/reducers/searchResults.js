import { SEARCH } from '../actions/constants';

const searchResults = (state = {}, action) => {
  switch (action.type) {
    case SEARCH.SEARCH_SUCCESS:
      const { data } = action; 
      const { page, keyword, result } = data || {};
      return {
        ...state,
        [keyword]: {
          ...state[keyword],
          [page]: {  
            result
          }
        }
      } 
    default:
      return state;
  }
};

export default searchResults;
