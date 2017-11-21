import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from '../../src/components/search_results';
import SearchResult from '../../src/components/search_result';

jest.mock('../../src/components/search_result', () => 'search-result');

const props = {
  results: [
    { id: 'lorem' },
    { id: 'ipsum' },
    { id: 'dolor' },
  ],
};

describe('SearchResults', () => {
  it('renders an collection of search results', () => {
    const component = shallow(<SearchResults { ...props } />);
    expect(component.find(SearchResult).length).toEqual(3);
  });
});
