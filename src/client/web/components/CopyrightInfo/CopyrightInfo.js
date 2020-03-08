import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './CopyrightInfo.styles';
import { Typography, Link } from '@material-ui/core';

const CopyrightInfo = ({ classes }) => <div className={classes.copyRightInfo}>
  <Typography variant="caption">
    <span>&copy;</span>
    <span>&nbsp;</span>
    <Link href="https://jsdrome.com">jsDrome</Link>
    <span>&nbsp;</span>
    <span>{new Date().getFullYear()} | All rights reserved</span>
  </Typography>
</div>

export default withStyles(styles, { withTheme: true })(CopyrightInfo);
