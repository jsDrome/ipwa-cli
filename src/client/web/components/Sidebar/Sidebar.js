import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import Toolbar from 'Components/Toolbar/Toolbar';
import { Logo } from 'Components/Navbar/Navbar';
import styles from './Sidebar.styles';

const Sidebar = ({ classes, children, isDrawerOpen, handleDrawerToggle, title }) => {
  return <nav>
    <Drawer
      classes={{ paper: classes.drawer }}
      variant="temporary"
      anchor="left"
      open={isDrawerOpen}
      onClose={handleDrawerToggle}>
      <Toolbar>
        <Logo />
        <Typography variant="h6" color="textSecondary" className={classes.flex} noWrap>{title}</Typography>
      </Toolbar>
      {children}
    </Drawer>
  </nav>;
};

Sidebar.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
  isDrawerOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  title: PropTypes.string,
};

Sidebar.defaultProps = {
  classes: null,
  children: null,
  isDrawerOpen: false,
  handleDrawerToggle: () => false,
  title: 'Title',
};

export default withStyles(styles, { withTheme: true })(Sidebar);
