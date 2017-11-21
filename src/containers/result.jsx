import React from 'react';
import { connect } from 'react-redux';
import { find, isEmpty, result } from 'lodash';

import Result from '../components/result';
import { fetchRepoAndReadMe, resetRepo } from '../actions/index';

const mapStateToProps = ({
  error,
  loading,
  repo,
  repos,
}, {
  match: { params },
}) => ({
  error,
  loading: isEmpty(repo) || loading,
  params,
  repo,
});

const mapDispatchToProps = { fetchRepoAndReadMe, resetRepo };

export default connect(mapStateToProps, mapDispatchToProps)(Result);
