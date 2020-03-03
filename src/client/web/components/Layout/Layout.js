import React from "react";

import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';

const App = ({ children }) => <React.Fragment>
  <Navbar />
  <Toolbar />
  {children}
  <Sidebar />
</React.Fragment>;

export default App;
