import React from 'react';
import { shallow } from 'enzyme';

import Notice from '../../src/components/notice';

describe('Notice', () => {
  it('renders a child string', () => {
    const component = shallow(<Notice>Lorem Ipsum</Notice>);
    expect(component.text()).toEqual('Lorem Ipsum');
  });
});
