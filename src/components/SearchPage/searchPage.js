import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchPage.css';
import queryString from 'query-string';
import * as actions from '../../actions/searchActions';
import { connect } from 'react-redux';
import SearchWidget from '../SearchWidget'
import SearchResultsList from '../SearchResultsList';

class SearchPage extends Component {

  state = {
    currentResults: {}
  }

  componentDidMount () {
    this.parseAndSearch(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.parseAndSearch(nextProps);
  }

  parseAndSearch = (props) => {
    const { location, search, searchResults } = this.props;
    var parsed = queryString.parse(location.search);
    var data = {
      keyword: parsed.q,
      page: parsed.page
    };
    if(searchResults[data.keyword]) {
      var keyData = searchResults[data.keyword];
      if(keyData[data.page]) {
        var results = keyData[data.page];
        this.setState({
          currentResults: results
        });
        return;
      }
    }
    search(data);
  }

  render () {

    const {currentResults} = this.state;

    return <div>
      <SearchWidget />
      <SearchResultsList
        repos={currentResults.result && currentResults.result.items}
      />
    </div>
  }

}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};


SearchPage = connect(
  mapStateToProps,
  actions
)(SearchPage)

export default SearchPage;
