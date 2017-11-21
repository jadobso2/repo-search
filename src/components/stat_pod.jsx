import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/stat_pod.scss';

const StatPod = ({ children, count }) => (
  <article className="stat-pod">
    <strong className="stat-pod__count">{ count }</strong>
    <p className="stat-pod__title">{ children }</p>
  </article>
);

StatPod.defaultProps = {
  count: 0,
};

StatPod.propTypes = {
  children: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export default StatPod;
