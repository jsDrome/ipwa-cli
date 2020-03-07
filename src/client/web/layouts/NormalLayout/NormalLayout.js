import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';

import Navbar from 'Components/Navbar/Navbar';
import Toolbar from 'Components/Toolbar/Toolbar';
import Sidebar from 'Components/Sidebar/Sidebar';

import styles from './NormalLayout.styles';

const NormalLayout = ({ classes, children }) => {
  const [ isSidebarOpen, setSidebarOpen ] = useState(false);

  return <div className={classes.normalLayout}>
    <Navbar
      isUserLoggedIn={window.isUserLoggedIn}
      onMenuButtonClick={() => setSidebarOpen(true)} />
    <Toolbar />
    <div className={classes.normalLayoutContents}>
      {children}
    </div>
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
  </div>;
}

export default withStyles(styles)(NormalLayout);
