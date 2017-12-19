// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Wallet.css';

class Wallet extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    wallet: number
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, wallet } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`wallet ${styles.wallet}`} data-tid="wallet">
          {wallet}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    );
  }
}

export default Wallet;
