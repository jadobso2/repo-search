import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './search_result';

const SearchResults = ({ results }) => (
  <section className="search-results">
    { results.map(props => (
      <SearchResult key={ props.id } { ...props } />
    )) }
  </section>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SearchResults;
