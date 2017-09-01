import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchListItem.css'; 

class SearchListItem extends Component {

  state = {
    expand: false
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      expand: false
    });
  }


  toggle = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render () {
    const { repo } = this.props;
    const { expand } = this.state;

    if (!repo) {
      return null;
    }
  
    return <li 
      onClick={this.toggle}>
      {repo.full_name}
      {expand ?
        <div>
          Language: {repo.language}
          Followers: {repo.followers}
          Url: {repo.url}
          Description: {repo.description}
        </div>
      : null}
    </li>
  }
}

export default SearchListItem;
