import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const _Toolbar = ({ classes, children }) => <Toolbar className={classes.toolBar} disableGutters>{children}</Toolbar>;

export default withStyles(styles)(_Toolbar);
