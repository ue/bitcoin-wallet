import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Avatar, Typography } from 'material-ui';

import image from '../../assets/images/brand/banner.jpg';

const styles = {
  row: {
    display: 'flex',
  },
  brand: {
    margin: 10,
    width: 60,
    height: 60,
  },
  title: {
    marginTop: 25,
  },
};

function LogoView(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar src={image} className={classes.brand} />
      <Typography className={classes.title} type="headline" component="h2">
        The Wallet
      </Typography>
    </div>
  );
}

LogoView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoView);
