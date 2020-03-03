import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';

import styles from './Modal.styles';

const Modal = ({ children, isModalOpen, handleModalClose, title }) => {
  return <Dialog
    open={!!isModalOpen}
    onClose={handleModalClose}
    aria-labelledby="dialog-title">
    <DialogTitle id="dialog-title">{title}</DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
    <DialogActions>
    </DialogActions>
  </Dialog>
};

Modal.defaultProps = {
  children: null,
  isModalOpen: false,
  handleModalClose: () => false,
  title: '',
};

Modal.propTypes = {
  children: PropTypes.object,
  isModalOpen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  handleModalClose: PropTypes.func,
  title: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(Modal);
