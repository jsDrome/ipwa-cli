import React from "react";

import Navbar from '../Navbar/Navbar';
import Toolbar from "../Toolbar/Toolbar";

const App = ({ children }) => <React.Fragment>
  <Navbar />
  <Toolbar />
  {children}
</React.Fragment>;

export default App;
