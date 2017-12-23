import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  Home,
  AccountBalanceWallet,
  CompareArrows,
  History,
  Settings,
  InfoOutline,
  ExitToApp,
  CardGiftcard,
} from 'material-ui-icons';

export const menuListItems = (
  <div>
    <Link to="/wallet/inbox">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </Link>

    <Link to="/wallet/wallets">
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceWallet />
        </ListItemIcon>
        <ListItemText primary="Wallets" />
      </ListItem>
    </Link>

    <Link to="/wallet/exchange">
      <ListItem button>
        <ListItemIcon>
          <CompareArrows />
        </ListItemIcon>
        <ListItemText primary="Exchange" />
      </ListItem>
    </Link>

    <Link to="/wallet/history">
      <ListItem button>
        <ListItemIcon>
          <History />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>
    </Link>

    <Link to="/wallet/settings">
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);

export const underMenuListItems = (
  <div>
    <Link to="/wallet/support">
      <ListItem button>
        <ListItemIcon>
          <InfoOutline />
        </ListItemIcon>
        <ListItemText primary="Support" />
      </ListItem>
    </Link>

    <Link to="/wallet/invite">
      <ListItem button>
        <ListItemIcon>
          <CardGiftcard />
        </ListItemIcon>
        <ListItemText primary="Invite" />
      </ListItem>
    </Link>

    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </Link>
  </div>
);
