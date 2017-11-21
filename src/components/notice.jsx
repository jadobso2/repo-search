import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/notice.scss';

const Notice = ({ children }) => (
  <p className="notice">
    { children }
  </p>
);

Notice.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Notice;
