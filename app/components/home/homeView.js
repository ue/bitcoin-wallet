// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './_styles.css';
import Button from 'material-ui/Button';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>The Wallet</h2>
          <Link to="/wallet">
            <Button raised color="primary">
              Start
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}