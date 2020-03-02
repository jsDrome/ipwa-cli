import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import Meta from './Meta';

const App = ({ children }) => <Fragment>
  <Meta />
  {children}
</Fragment>;

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default App;
