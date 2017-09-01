import React, {Component} from 'react';
import cx from 'classnames';
import styles from './loader.css';

class Loader extends Component {

  render () {
    return <div className={cx(styles['spinner'])}>
      <div className={cx(styles['double-bounce1'])}></div>
      <div className={cx(styles['double-bounce2'])}></div>
    </div>
  }

}

export default Loader;
