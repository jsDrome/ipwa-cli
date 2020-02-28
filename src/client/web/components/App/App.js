import React from "react";
import { Typography } from '@material-ui/core';

import Meta from './Meta';

const App = ({ children }) => <React.Fragment>
  <Meta />
  <Typography>App!</Typography>
  {children}
</React.Fragment>;

export default App;
