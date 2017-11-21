import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render } from 'enzyme';

import Header from '../../src/components/header';

describe('Header', () => {
  it('renders a link to /', () => {
    const component = render(
      <StaticRouter context={ {} }>
        <Header />
      </StaticRouter>
    );
    expect(component.find('a').prop('href')).toEqual('/');
  });
});
