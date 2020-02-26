import React from "react";

import Meta from '../Meta/Meta';

const App = ({ children }) => <React.Fragment>
  <Meta />
  <h1>App!</h1>
  {children}
</React.Fragment>;

export default App;
