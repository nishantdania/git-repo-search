import React, {Component} from 'react';
import cx from 'classnames';
import styles from './homepage.css';
import SearchWidget from '../SearchWidget';

class Homepage extends Component {

  render () {
    return <div>
      <SearchWidget />
    </div>
  }

}

export default Homepage;
