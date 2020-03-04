import React from "react";

import Navbar from 'Components/Navbar/Navbar';
import Toolbar from 'Components/Toolbar/Toolbar';
import Sidebar from 'Components/Sidebar/Sidebar';

const App = ({ children }) => <React.Fragment>
  <Navbar />
  <Toolbar />
  {children}
  <Sidebar />
</React.Fragment>;

export default App;
