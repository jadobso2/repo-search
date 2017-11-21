import React from 'react';
import { mount, shallow } from 'enzyme';

import Search from '../../src/components/search';
import SearchBar from '../../src/components/search_bar';
import SearchResults from '../../src/components/search_results';

const props = additionalProps => ({
  error: false,
  loading: false,
  results: [
    { id: 'lorem' },
    { id: 'ipsum' },
  ],
  search: jest.fn(),
  query: '',
  ...additionalProps,
});

describe('Search', () => {
  it('renders a search bar', () => {
    const component = shallow(<Search { ...props() } />);
    expect(component.find(SearchBar).length).toEqual(1);
  });

  it('renders search results', () => {
    const component = shallow(<Search { ...props() } />);
    expect(component.find(SearchResults).length).toEqual(1);
  });

  describe('when loading', () => {
    it('renders a loading notice', () => {
      const component = mount(<Search { ...props({ loading: true }) } />);
      expect(component.find('.notice').text()).toEqual('Loading...');
    });
  });

  describe('when error', () => {
    it('renders an error notice', () => {
      const component = mount(<Search { ...props({ error: true }) } />);
      expect(component.find('.notice').text())
        .toEqual('Something wen\'t wrong, try searching again.');
    });
  });
});
