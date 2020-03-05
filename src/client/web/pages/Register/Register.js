import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './Register.styles';

const Register = ({ classes }) => <Fragment>
  <Button
    href={"/login/linkedin"}
    className={classes.registerButton}
    variant="contained"
    color="primary"
    startIcon={<LinkedInIcon />}>
    LinkedIn
  </Button>
  <Button
    href={"/login/github"}
    className={classes.registerButton}
    variant="contained"
    color="primary"
    startIcon={<GitHubIcon />}>
    Github
  </Button>
</Fragment>;

export default withStyles(styles)(Register);
