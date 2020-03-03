import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '../Toolbar/Toolbar';
import BlinkingCursor from '../BlinkingCursor/BlinkingCursor';

import styles from './Navbar.styles';

const MenuButton = ({ classes, onMenuButtonClick }) => <IconButton aria-label="Open drawer" className={classes["Navbar_menu-btn"]} onClick={onMenuButtonClick}>
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

const RightSideButtons = ({ isUserLoggedIn, onLoginClick, onRegisterClick }) => <Fragment>
  {!isUserLoggedIn && <Fragment>
    <Button onClick={onLoginClick}>Login</Button>
    <Button onClick={onRegisterClick}>Register</Button>
  </Fragment>}
  {isUserLoggedIn && <Button href="/logout">Logout</Button>}
</Fragment>;

const LogoButton = ({ classes }) => <img alt="logo" className={classes["Navbar_menu-logo"]} src="/img/icon-56.png" />;

const Navbar = ({ appBarProps, ...props }) => <AppBar className={props.classes.Navbar} {...appBarProps}>
  <Toolbar>
    <MenuButton {...props} />
    <LogoButton {...props} />
    <TitleBar {...props} />
    <RightSideButtons {...props} />
  </Toolbar>
</AppBar>;

Navbar.propTypes = {
  appBarProps: PropTypes.object,
  classes: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  onMenuButtonClick: PropTypes.func,
  onNavbarTitleClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
  isUserLoggedIn: PropTypes.bool,
};

Navbar.defaultProps = {
  appBarProps: null,
  classes: null,
  title: 'Title',
  description: 'Description',
  onMenuButtonClick: () => false,
  onNavbarTitleClick: () => false,
  onLoginClick: () => false,
  onRegisterClick: () => false,
  isUserLoggedIn: false,
};

export default withStyles(styles, { withTheme: true })(Navbar);

export const Logo = withStyles(styles)(LogoButton);
