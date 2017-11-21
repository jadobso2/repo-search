import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notice from '../components/notice';
import SearchBar from '../components/search_bar';
import SearchResults from '../components/search_results';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      search,
      query,
    } = this.props;

    return (
      <div>
        <SearchBar
          search={ search }
          query={ query }
        />
        { this.renderContent() }
      </div>
    );
  }

  renderContent() {
    const {
      error,
      loading,
      results,
      query,
    } = this.props;

    if (loading) {
      return (<Notice>Loading...</Notice>);
    } else if (error) {
      return (<Notice>Something wen't wrong, try searching again.</Notice>);
    } else if (!results.length && query.length > 0) {
      return (<Notice>No results found. Try another search.</Notice>);
    }

    return (<SearchResults results={ results } />);
  }
};

Search.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
