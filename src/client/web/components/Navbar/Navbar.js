import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from 'Components/Toolbar/Toolbar';
import BlinkingCursor from 'Components/BlinkingCursor/BlinkingCursor';

import styles from './Navbar.styles';

const MenuButton = ({ classes, onMenuButtonClick }) => onMenuButtonClick && <IconButton aria-label="Open drawer" className={classes["Navbar_menu-btn"]} onClick={onMenuButtonClick}>
  <MenuIcon className={classes["Navbar_menu-icon"]} />
</IconButton>;

const TitleBar = ({ classes, onNavbarTitleClick, title, description }) => <div className={classes["Navbar_title-bar"]} onClick={onNavbarTitleClick}>
  <Typography className={classes["Navbar_title"]} noWrap variant="h6">{title}</Typography>
  <Hidden xsDown>
    <span className={classes["Navbar_greater-than"]}>&gt;</span>
    <Typography className={classes["Navbar_description"]} noWrap variant="body2">{description}</Typography>
    <BlinkingCursor className={classes["Navbar_cursor"]} />
  </Hidden>
</div>;

const RightSideButtons = ({ isUserLoggedIn, onRegisterClick }) => <Fragment>
  {!isUserLoggedIn && <Fragment>
    <Button onClick={onRegisterClick}>Login / Register</Button>
  </Fragment>}
  {isUserLoggedIn && <Button href="/logout">Logout</Button>}
</Fragment>;

const LogoButton = ({ classes }) => <img alt="logo" className={classes["Navbar_menu-logo"]} src="/img/icon-56.png" />;

const LogoButtonWhite = ({ classes }) => <img alt="logo" className={classes["Navbar_menu-logo"]} src="/img/icon-96-white.png" />;

const Navbar = ({ appBarProps, ...props }) => {
  const { classes } = props;
  return <AppBar className={classes.Navbar} {...appBarProps}>
    <Toolbar>
      <MenuButton {...props} />
      <LogoButtonWhite {...props} />
      <TitleBar {...props} />
      <RightSideButtons {...props} />
    </Toolbar>
  </AppBar>
};

Navbar.propTypes = {
  appBarProps: PropTypes.object,
  classes: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  onMenuButtonClick: PropTypes.func,
  onNavbarTitleClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
  isUserLoggedIn: PropTypes.bool,
};

Navbar.defaultProps = {
  appBarProps: null,
  classes: null,
  title: 'Title',
  description: 'Description',
  onMenuButtonClick: null,
  onNavbarTitleClick: () => window.location = '/',
  onRegisterClick: null,
  isUserLoggedIn: false,
};

export default withStyles(styles, { withTheme: true })(Navbar);
export const Logo = withStyles(styles)(LogoButton);
