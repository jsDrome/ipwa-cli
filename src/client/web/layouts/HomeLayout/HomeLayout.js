import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';

import Navbar from 'Components/Navbar/Navbar';
import Toolbar from 'Components/Toolbar/Toolbar';
import Modal from 'Components/Modal/Modal';
import Register from 'Pages/Register/Register';
import SocialLinks from 'Components/SocialLinks/SocialLinks';
import CopyrightInfo from 'Components/CopyrightInfo/CopyrightInfo';

import styles from './HomeLayout.styles';

const MODAL_TYPES = {
  REGISTER: 'Login / Register',
};

const modalContent = type => {
  switch (type) {
  case MODAL_TYPES.REGISTER:
    return <Register />;
  default:
    return null;
  }
};

const HomeLayout = ({ classes, children }) => {
  const [ isModalOpen, setModalOpen ] = useState(false);

  const appBarProps = {
    elevation: 0,
  };

  return <div className={classes.homeLayout}>
    <Modal
      isModalOpen={isModalOpen}
      title={isModalOpen || ''}
      handleModalClose={() => setModalOpen(false)}>
      {modalContent(isModalOpen)}
    </Modal>
    <Navbar
      isUserLoggedIn={window.isUserLoggedIn}
      appBarProps={appBarProps}
      onRegisterClick={() => setModalOpen(MODAL_TYPES.REGISTER)} />
    <Toolbar />
    <div className={classes.homeLayoutContents}>
      {children}
      <SocialLinks />
      <CopyrightInfo />
    </div>
  </div>;
}

export default withStyles(styles)(HomeLayout);
