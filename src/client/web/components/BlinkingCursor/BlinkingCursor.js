import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './BlinkingCursor.less';

const BlinkingCursor = ({ className }) => <span className={cn("BlinkingCursor", className)} />;

BlinkingCursor.propTypes = {
  className: PropTypes.string,
};

BlinkingCursor.defaultProps = {
  className: '',
};

export default BlinkingCursor;
