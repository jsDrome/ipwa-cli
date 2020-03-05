import React, { useState } from 'react';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

import styles from './Alert.styles';

const DELAY = 100;

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const MySnackbarContent = ({ classes, className, message, onClose, variant, ...other }) => {
  const Icon = variantIcon[variant];
  return <SnackbarContent
    className={classNames(classes[variant], className)}
    aria-describedby="client-snackbar"
    message={<span id="client-snackbar" className={classes.message}>
      <Icon className={classNames(classes.icon, classes.iconVariant)} />
      {message}
    </span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={onClose} >
        <CloseIcon className={classes.icon} />
      </IconButton>,
    ]}
    {...other} />;
}

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

const Alert = ({ handleErrorClose, type, children, duration }) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setIsOpen(false);
    if (handleErrorClose) setTimeout(() => handleErrorClose(), DELAY);
  };
  return <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={isOpen}
    autoHideDuration={duration}
    onClose={handleClose}>
    <MySnackbarContentWrapper
      onClose={handleClose}
      variant={type}
      message={children} />
  </Snackbar>;
}

export default Alert;
