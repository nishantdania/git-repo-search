import ApiCaller from './ApiCaller';
import { SEARCH } from './constants';
import { formatData } from '../utils/githubService';

export const search = (data) => (dispatch) => {
  
  dispatch({type: SEARCH.SEARCH_REQUEST});

  ApiCaller.get(
    '/search/repositories',
    {
      params: {
        q: data.keyword,
        page: data.page || 1,
        per_page: SEARCH.PER_PAGE
      }
    }
  )
  .then((res) => {
    res = formatData(res.data);
    var result = {
      keyword: data.keyword,
      page: data.page,
      result: res
    }
    dispatch({
      type: SEARCH.SEARCH_SUCCESS,
      data: result
    });
  })
  .catch((err) => {

  });
}
