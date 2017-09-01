import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchResultsList.css'; 

class SearchResultsList extends Component {

  render () {
    const { repos } = this.props;
    if (!repos) {
      return null;
    }

    return <ul>
      {repos.map((repo, index) => 
        <li key={index}>
          {repo.full_name}
        </li>
      )}
    </ul>
  }
}

export default SearchResultsList;
