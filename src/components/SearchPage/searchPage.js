import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchPage.css';
import queryString from 'query-string';
import * as actions from '../../actions/searchActions';
import { connect } from 'react-redux';

class SearchPage extends Component {

  componentDidMount () {
    const { location, search } = this.props;
    var parsed = queryString.parse(location.search);
    var data = {
      keyword: parsed.q,
      page: parsed.page
    }
    search(data);
  }

  render () {
    return <div>
    </div>
  }

}

SearchPage = connect(
  null,
  actions
)(SearchPage)

export default SearchPage;
