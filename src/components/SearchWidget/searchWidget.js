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
      if(keyword.length < 1) {
        return;
      }
      this.updateLocalStorage(keyword);
      var url = '/search?q=' + keyword + '&page=1';
      history.push(url);
    }
  }

  handleClick = (e) => {
    const { history } = this.props;
    const { keyword } = this.state;
    if(keyword.length < 1) {
      return;
    }
    this.updateLocalStorage(keyword);
    var url = '/search?q=' + keyword + '&page=1';
    history.push(url);
  }

  updateLocalStorage = (data) => {
    if(data.length > 0) {
      var prev = [];
      prev = JSON.parse(localStorage.getItem('recent')) || [];
      if(prev.includes(data)) {
        var index = prev.indexOf(data);
        prev.splice(index, 1);
      }
      if(prev.length > 4) {
        prev.splice(0, 1);
      }
      prev.push(data);
      localStorage.setItem('recent', JSON.stringify(prev));
    }
  }

  render () {

    const { extra } = this.props;

    return <div className={cx(styles['outer'], {[styles['extra']]: extra})}>
      <input 
        placeholder='e.g. react, ember'
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
      <span 
        onClick={this.handleClick}
        className={cx(styles['search'])}>
        Go
      </span>
    </div>
  }

}

export default withRouter(SearchWidget);
