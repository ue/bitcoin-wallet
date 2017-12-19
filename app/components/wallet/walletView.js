// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './_styles.css';

class Wallet extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`wallet ${styles.wallet}`} data-tid="wallet">
          sa
        </div>
      </div>
    );
  }
}

export default Wallet;
