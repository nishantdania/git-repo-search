import React, {Component} from 'react';
import cx from 'classnames';
import styles from './pagination.css'; 

class Pagination extends Component {

  state = {
    value: 0
  }

  componentWillReceiveProps (nextProps) {
    const {page} = nextProps;
    if(page) {
      this.setState({
        value: page
      });
    }
  }

  handleKeyPress = (e) => {
    const { gotoPage } = this.props;
    var page = e.target.value.replace(/\D/g,'');
    if(e.which === 13) {
      gotoPage(page);
    }
  }

  handleChange= (e) => {
    var page = e.target.value.replace(/\D/g,'');
    this.setState({
      value: page
    });
  }

  render () {

    const { page, 
            total, 
            handleNextClick, 
            handlePrevClick,
          } = this.props;
    const { value } = this.state;
  
    if(!page || !total) {
      return null;
    }

    return <div>
      <span onClick={handlePrevClick}>
        Previous
      </span>
      <span>
        <input 
          value={value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </span>
      <span> of {total} </span>
      <span onClick={handleNextClick}>
        Next 
      </span>
    </div>  

  }
}

export default Pagination;
