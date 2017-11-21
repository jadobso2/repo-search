import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/components/search_result.scss';
import '../styles/components/button.scss';

const SearchResult = ({
  description,
  name,
  owner,
}) => (
  <article className="search-result">
    <h2 className="search-result__title">{ name }</h2>
    { description && (
      <p className="search-result__description">{ description }</p>
    ) }
    <Link to={`/repo/${owner.login}/${name}`} className="button">
      More Detail
    </Link>
  </article>
);

SearchResult.defaultProps = {
  description: '',
};

SearchResult.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResult;
