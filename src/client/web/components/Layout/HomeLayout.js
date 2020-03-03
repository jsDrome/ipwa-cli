import React, { useState } from "react";

import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';
import Sidebar from '../Sidebar/Sidebar';

import './HomeLayout.less';

const HomeLayout = ({ children }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState();
  const [ isModalOpen, setModalOpen ] = useState(false);

  const appBarProps = {
    elevation: 0,
  };

  return <div className="HomeLayout">
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

export default HomeLayout;
