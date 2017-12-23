import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Avatar, Typography } from 'material-ui';

const styles = {
  row: {
    display: 'flex',
    marginTop: 50,
  },
  useravatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  username: {
    fontSize: 20,
    marginTop: 20,
  },
  email: {
    fontSize: 12,
  },
};

function QuickUserProfile(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar className={classes.useravatar}>UE</Avatar>
      <Typography className={classes.username} type="headline" component="h2">
        Ugur Erdal
        <Typography className={classes.email}>ugurerdal93@gmail.com</Typography>
      </Typography>
    </div>
  );
}

QuickUserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuickUserProfile);
