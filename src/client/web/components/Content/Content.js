import React from 'react';
import Paper from '@material-ui/core/Paper';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from './Content.styles';

const Content = ({ classes, children, className }) => <main className={cn(classes.content, className)}>
  <Paper className={classes.paper} elevation={2}>
    {children}
  </Paper>
</main>;

export default withStyles(styles)(Content);
