import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchPage.css'; 
import queryString from 'query-string';
import * as actions from '../../actions/searchActions.js';
import { connect  } from 'react-redux';
import SearchWidget from '../SearchWidget';
import SearchResultsList from '../SearchResultsList';
import Pagination from '../Pagination';
import { SEARCH } from '../../actions/constants.js';
import { withRouter } from 'react-router-dom';

class SearchPage extends Component {

  state = {
    currentResults: {},
  }

  componentDidMount () {
    this.parseAndSearch(this.props);    
  }

  componentWillReceiveProps (nextProps) {
    this.parseAndSearch(nextProps);    
  }

  parseAndSearch  = (props, nextPage) => {
    const { history, location, search, searchResults } = props;
    var parsed = queryString.parse(location.search);
    var data = {
      keyword: parsed.q,
      page: nextPage ? nextPage : parsed.page || 0
    };
    if(nextPage) {
      parsed.page = nextPage;
      var newQuery = queryString.stringify(parsed);
      var newHref = location.pathname + '?' + newQuery;
      history.push(newHref);
      return; 
    }
    if(searchResults[data.keyword]) {
      var keyData = searchResults[data.keyword];
      if(keyData[data.page]) {
        var results = keyData[data.page];
        this.setState({
          currentResults: results,
          page: data.page
        });
        nextPage = parseInt(data.page, 10) + 1;
        if(!keyData[nextPage]) {
          search(data, true);
        }
        return;
      }
    }
    search(data);
  }

  handleNextClick = () => {
    const {currentResults, page} = this.state;
    var count = currentResults.result && currentResults.result.count; 
    var total = count === 0 ? 0 : Math.floor(count/SEARCH.PER_PAGE); 
    if(page < total) {
      this.gotoPage(parseInt(page, 10) + 1);
    }
  }

  handlePrevClick = () => {
    const {page} = this.state;
    if(page > 1) {
      this.gotoPage(parseInt(page, 10) - 1);
    }
  }

  gotoPage = (page) => {
    this.parseAndSearch(this.props, page);
  }

  render () {

    const {currentResults, page} = this.state;
    var count = currentResults.result && currentResults.result.count; 
    var total = count === 0 ? 0 : Math.floor(count/SEARCH.PER_PAGE); 

    return <div>
      <SearchWidget />
      <SearchResultsList
        repos={currentResults.result && currentResults.result.items}
      />
      <Pagination 
        page={page}
        total={total}
        handleNextClick={this.handleNextClick}
        handlePrevClick={this.handlePrevClick}
        gotoPage={this.gotoPage}
      />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

SearchPage = withRouter(connect(
  mapStateToProps,
  actions
)(SearchPage));

export default SearchPage;
