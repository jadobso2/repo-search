import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';

import Notice from '../components/notice';
import StatPod from '../components/stat_pod';
import StatPods from '../components/stat_pods';
import '../styles/components/result.scss';

class Result extends Component {
  constructor(props) {
    super(props);
    props.fetchRepoAndReadMe(props.params);
  }

  componentWillUnmount() {
    this.props.resetRepo();
  }

  render() {
    const {
      error,
      loading,
      repo,
    } = this.props;
    const {
      description,
      name,
      readMe,
    } = repo;

    return (
      <article className="result">
        { loading ? (
          <Notice>Loading...</Notice>
        ) : (
          <div>
            { error ? (
              <Notice>Something wen't wrong, try searching again.</Notice>
            ) : (
              <div className="result__body">
                <h1 className="result__title">{ name }</h1>
                <p className="result__description">{ description }</p>
                { this.renderStatPods() }
                { this.renderReadMe() }
              </div>
            ) }
            <Link to="/" className="button">
              Back to Search
            </Link>
          </div>
        ) }
      </article>
    );
  }

  renderStatPods() {
    const { repo } = this.props;
    const {
      forks_count: forks,
      open_issues_count: openIssues,
      watchers_count: watchers,
    } = repo;

    return (
      <StatPods>
        <StatPod count={ forks }>Forks</StatPod>
        <StatPod count={ watchers }>Watchers</StatPod>
        <StatPod count={ openIssues }>Open Issues</StatPod>
      </StatPods>
    );
  }

  renderReadMe() {
    const { repo } = this.props;
    const { readMe } = repo;

    if (readMe) {
      return (
        <section>
          <h2 className="result__sub-title">Read Me</h2>
          <MarkdownRenderer markdown={ readMe } />
        </section>
      );
    }
  }
}

Result.propTypes = {
  error: PropTypes.bool.isRequired,
  fetchRepoAndReadMe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  repo: PropTypes.shape({
    description: PropTypes.string,
    forks_count: PropTypes.number,
    name: PropTypes.string,
    open_issues_count: PropTypes.number,
    readMe: PropTypes.string,
    watchers_count: PropTypes.number,
  }).isRequired,
  resetRepo: PropTypes.func.isRequired,
};

export default Result;
