import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/search';
import { search } from '../actions/index';

const mapStateToProps = ({ error, loading, repos, query }) =>
  ({ error, loading, results: repos, query });

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
