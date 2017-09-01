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
      <div className={cx(styles['code'])}>
        <a href='https://github.com/nishantdania/git-repo-search' target='_blank'>View Code</a>
      </div>
    </div>
  }

}

export default Homepage;
