import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';

import Navbar from 'Components/Navbar/Navbar';
import Toolbar from 'Components/Toolbar/Toolbar';
import Modal from 'Components/Modal/Modal';
import Sidebar from 'Components/Sidebar/Sidebar';

import styles from './HomeLayout.styles';

const HomeLayout = ({ classes, children }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState();
  const [ isModalOpen, setModalOpen ] = useState(false);

  const appBarProps = {
    elevation: 0,
  };

  return <div className={classes.homeLayout}>
    <Modal
      isModalOpen={isModalOpen}
      handleModalClose={() => setModalOpen(false)} />
    <Navbar
      appBarProps={appBarProps}
      onMenuButtonClick={() => setIsSidebarOpen(!isSidebarOpen)}
      onRegisterClick={() => setModalOpen('register')} />
    <Toolbar />
    <Sidebar isDrawerOpen={isSidebarOpen} handleDrawerToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
    <div className={classes.homeLayoutContents}>
      {children}
    </div>
  </div>;
}

export default withStyles(styles)(HomeLayout);
