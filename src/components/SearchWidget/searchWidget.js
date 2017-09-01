import React, {Component} from 'react';
import cx from 'classnames';
import styles from './searchWidget.css';
import { withRouter } from 'react-router-dom';

class SearchWidget extends Component {

  state = {
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleKeyPress = (e) => {
    const { history } = this.props;
    const { keyword } = this.state;

    if(e.which === 13) {
      var url = '/search?q=' + keyword + '&page=1';
      history.push(url);
    }
  }

  render () {
    return <div>
      <input 
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    </div>
  }

}

export default withRouter(SearchWidget);
