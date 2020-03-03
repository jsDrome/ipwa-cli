import React from "react";

import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';

import './HomeLayout.less';

const appBarProps = {
  elevation: 0,
};

const HomeLayout = ({ children }) => <div className="HomeLayout">
  <Navbar appBarProps={appBarProps} />
  <Toolbar />
  <div className="HomeLayout_contents">
    {children}
  </div>
</div>;

export default HomeLayout;
