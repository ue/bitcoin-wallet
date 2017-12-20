import React from 'react';
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
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceWallet />
      </ListItemIcon>
      <ListItemText primary="Wallets" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CompareArrows />
      </ListItemIcon>
      <ListItemText primary="Exchange" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <History />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const underMenuListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InfoOutline />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CardGiftcard />
      </ListItemIcon>
      <ListItemText primary="Invite" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);
