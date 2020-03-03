import React, { useState } from "react";

import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';

import './HomeLayout.less';

const HomeLayout = ({ children }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState();

  const appBarProps = {
    elevation: 0,
  };

  return <div className="HomeLayout">
    <Navbar appBarProps={appBarProps} onMenuButtonClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
    <Toolbar />
    <Sidebar isDrawerOpen={isSidebarOpen} handleDrawerToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
    <div className="HomeLayout_contents">
      {children}
    </div>
  </div>;
}

export default HomeLayout;
