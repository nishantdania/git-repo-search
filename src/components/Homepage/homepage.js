import React, {Component} from 'react';
import cx from 'classnames';
import styles from './homepage.css';
import SearchWidget from '../SearchWidget';
import RecentSearches from '../RecentSearches';

class Homepage extends Component {

  render () {
    return <div className={cx(styles['outer'])}>
      <h1>
        Git Repo Search
      </h1>
      <SearchWidget />
      <RecentSearches />
    </div>
  }

}

export default Homepage;
