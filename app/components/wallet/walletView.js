import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import SettingView from '../settings/settingsView';
import HistoryView from '../history/historyView';
import InboxView from '../inbox/inboxView';
import ExchangeView from '../exchange/exchangeView';
import WalletsView from '../wallets/walletsView';
import PriceView from '../price/priceView';
import LogoView from '../logo/logoView';
import QuicUserProfileView from '../quickUserProfile/quicUserProfileView';

import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List,
  IconButton,
  Hidden,
  Divider,
  withStyles,
} from 'material-ui';

import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import { menuListItems, underMenuListItems } from '../list/listView';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 500,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100%',
    position: 'fixed',
    padding: theme.spacing.unit * 3,
    marginTop: 49,
    marginLeft: '-8px',
    textColor: 'black',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#0099ff',
      height: 'calc(100%)',
      marginLeft: '-8px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth - 6.9,
      height: 'calc(100%)',
    },
  },
  chevronLeftIcon: {
    position: 'absolute',
    right: 0,
    marginTop: 15,
  },
});

class Wallet extends React.Component {
  state = {
    menuOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleDrawerClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        {this.state.menuOpen ? (
          <IconButton className={classes.chevronLeftIcon} onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        ) : null}
        <LogoView />
        <PriceView />
        <List>{menuListItems}</List>
        <Divider />
        <List>{underMenuListItems}</List>
        <Divider />
        <QuicUserProfileView />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Title
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.menuOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Route path="/wallet/settings" component={SettingView} />
            <Route path="/wallet/history" component={HistoryView} />
            <Route path="/wallet/exchange" component={ExchangeView} />
            <Route path="/wallet/inbox" component={InboxView} />
            <Route path="/wallet/wallets" component={WalletsView} />
          </main>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Wallet);
