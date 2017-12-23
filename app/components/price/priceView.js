import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Divider, Typography } from 'material-ui';

const styles = theme => ({
  priceView: {
    padding: 15,
    color: 'black',
  },
  price: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

function priceView(props) {
  const { classes } = props;
  return (
    <div className={classes.priceView}>
      <Divider />
      <Typography className={classes.price} type="headline" component="h2">
        <span>$US </span>
        123.423,2
        <Typography className={classes.updated}>Updated 15min ago</Typography>
      </Typography>
      <Divider />
    </div>
  );
}

priceView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(priceView);
