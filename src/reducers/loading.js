import { SEARCH } from '../actions/constants';

const loading = (state = {
  status: SEARCH.INIT
}, action) => {
  switch (action.type) {
    case SEARCH.SEARCH_SUCCESS: {
      return {
        status: SEARCH.SUCCESS  
      };}
    case SEARCH.SEARCH_REQUEST: {
      return {
        status: SEARCH.LOADING
      };}
    case SEARCH.SEARCH_ERROR: {
      return {
        status: SEARCH.ERROR
      };}
    default:
      return state;
  }
};

export default loading;
