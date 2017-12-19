/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import WalletPage from './containers/WalletPage';

export default () => (
  <App>
    <Switch>
      <Route path="/wallet" component={WalletPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
