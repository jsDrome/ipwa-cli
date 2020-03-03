import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';
import Sidebar from '../Sidebar/Sidebar';

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
    <div className="HomeLayout_contents">
      {children}
    </div>
  </div>;
}

export default withStyles(styles)(HomeLayout);
