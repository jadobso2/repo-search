import React from 'react';
import PropTypes from 'prop-types';

import { handlerValue, preventDefault } from '../helpers/event';
import '../styles/components/search_bar.scss';

const SearchBar = ({ search, query }) => (
  <form
    className="search-bar"
    onSubmit={ preventDefault }
  >
    <input
      onChange={ handlerValue(search) }
      placeholder="Search (repository name)"
      type="text"
      value={ query }
    />
  </form>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchBar;
