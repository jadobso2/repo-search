import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, shallow } from 'enzyme';

import SearchResult from '../../src/components/search_result';

const props = additionalProps => ({
  name: 'Lorem-Ipsum',
  owner: {
    login: 'dolor',
  },
  ...additionalProps,
});

describe('SearchResult', () => {
  it('renders a title from name', () => {
    const component = shallow(<SearchResult { ...props() } />);
    expect(component.find('.search-result__title').text()).toEqual('Lorem-Ipsum');
  });

  describe('has description', () => {
    it('renders a description', () => {
      const additionalProps = { description: 'lorem ipsum dolor' };
      const component = shallow(<SearchResult { ...props(additionalProps) } />);
      expect(component.find('.search-result__description').text())
        .toEqual('lorem ipsum dolor');
    });
  });

  it('renders a link to the result', () => {
    const component = render(
      <StaticRouter context={ {} }>
        <SearchResult { ...props() } />
      </StaticRouter>
    );
    expect(component.find('.button').prop('href'))
      .toEqual('/repo/dolor/Lorem-Ipsum');
  });
});
