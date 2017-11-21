import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/stat_pods.scss';

const StatPods = ({ children }) => (
  <section className="stat-pods">
    { children }
  </section>
);

StatPods.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StatPods;
