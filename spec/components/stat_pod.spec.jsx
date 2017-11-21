import React from 'react';
import { shallow } from 'enzyme';

import StatPod from '../../src/components/stat_pod';

const props = {
  count: 5,
};

describe('StatPod', () => {
  it('renders a title from child string', () => {
    const component = shallow(<StatPod { ...props }>Lorem Ipsum</StatPod>);
    expect(component.find('.stat-pod__title').text()).toEqual('Lorem Ipsum');
  });

  it('renders a count', () => {
    const component = shallow(<StatPod { ...props }>Lorem Ipsum</StatPod>);
    expect(component.find('.stat-pod__count').text()).toEqual('5');
  });
});
