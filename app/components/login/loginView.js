import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import { FormControl, TextField, Button } from 'material-ui';

const containerWidth = 480;

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: '2px',
    height: 400,
    marginLeft: '100px',
    marginRight: '100px',
    textAlign: 'center',
    display: '-webkit-inline-box',
    margin: '100px',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: 350,
    },
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
  },
  textField: {
    textAlign: 'center',
    width: 200,
    flexWrap: 'wrap',
  },
  formControl: {
    display: '-webkit-inline-box',
    marginTop: '40px',
  },
  formButton: {
    marginTop: '40px',
  },
});

class TextFields extends React.Component {
  state = {
    name: 'ugurerdal',
    rememberMe: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            required
            // error
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            required
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </FormControl>
        <Link to="/wallet">
          <Button className={classes.formButton} raised color="primary">
            Login
          </Button>
        </Link>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
