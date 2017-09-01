import ApiCaller from './ApiCaller';
import { SEARCH } from './constants.js';
import { formatData } from '../utils/githubService.js';

export const search = (data, onlyOnce = false) => (dispatch) => {

  dispatch({
    type: SEARCH.SEARCH_REQUEST,
  });

  if(!onlyOnce) {

    ApiCaller.get(
      '/search/repositories',
      {
        params: {
          q: data.keyword,
          page: data.page || 1,
          per_page: SEARCH.PER_PAGE
        }
      })
      .then((res) => {
        res = formatData(res.data);
        var result = {
          keyword: data.keyword,
          page: data.page,
          result: res  
        };
        dispatch({
          type: SEARCH.SEARCH_SUCCESS,
          data: result
        });
      })
      .catch((err) => {

      });
  }

  ApiCaller.get(
    '/search/repositories',
    {
      params: {
        q: data.keyword,
        page: parseInt(data.page) + 1 || 2,
        per_page: SEARCH.PER_PAGE
      }
    })
    .then((res) => {
      res = formatData(res.data);
      var result = {
        keyword: data.keyword,
        page: parseInt(data.page) + 1 || 2,
        result: res
      };
      dispatch({
        type: SEARCH.SEARCH_EXTRA_SUCCESS,
        data: result
      });
    })
    .catch((err) => {

    });

}
