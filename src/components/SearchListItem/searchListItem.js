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
      className={cx(styles['item'])} 
      onClick={this.toggle}>
      <div className={cx(styles['content'])}>
        <div className={cx(styles['name'])}>
          {repo.full_name}
        </div>
        {expand ?
          <div className={cx(styles['details'])}>
            <div className={cx(styles['data'])}>
              <span>Language: </span>{repo.language || 'Not available'}
              &nbsp;
              |
              <span> Followers: </span>{repo.followers}
            </div>
            <div className={cx(styles['data'])}>
              <span>Link: </span>
              <a href={repo.url} target='_blank'>{repo.url}</a>
            </div>
            <div className={cx(styles['data'])}>
              <span>
                Description:
              </span>
              <div className={cx(styles['desc'])}>
                {repo.description}
              </div>
            </div>
          </div>
        : null}
      </div>
    </li>
  }
}

export default SearchListItem;
