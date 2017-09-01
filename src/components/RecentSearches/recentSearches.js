import React, {Component} from 'react';
import cx from 'classnames';
import styles from './recentSearches.css';
import { withRouter } from 'react-router-dom';

class RecentSearches extends Component {

  handleClick = (keyword, e) => {
    const { history } = this.props;
    if(keyword.length < 1) {
      return;
    }
    var url = '/search?q=' + keyword + '&page=1';
    history.push(url);
  }

  render () {

    var recent = [];
    recent = JSON.parse(localStorage.getItem('recent')) || [];
    if(recent.length < 1) {
      return null;
    }

    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['title'])}>
        Recent Searches:
      </div>
      {recent.map((word, index) => 
        <div 
          className={cx(styles['item'])}  
          onClick={this.handleClick.bind(this, word)}
          key={index}>
          {word}
        </div>
      )}
    </div>
  }

}

export default withRouter(RecentSearches);
