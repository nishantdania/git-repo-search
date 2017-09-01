import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchResultsList.css'; 
import SearchListItem from '../SearchListItem';

class SearchResultsList extends Component {

  render () {
    const { repos } = this.props;
    if (!repos) {
      return null;
    }

    return <ul className={cx(styles['list'])}>
      {repos.map((repo, index) => 
        <SearchListItem 
          key={index}
          repo={repo}
        />
      )}
    </ul>
  }
}

export default SearchResultsList;
