import React from 'react';
import { shallow } from 'enzyme';

import StatPods from '../../src/components/stat_pods';
import StatPod from '../../src/components/stat_pod';

jest.mock('../../src/components/stat_pod', () => 'StatPod');

describe('StatPods', () => {
  it('renders an array of children', () => {
    const component = shallow(
      <StatPods>
        <StatPod />
        <StatPod />
        <StatPod />
      </StatPods>
    );
    expect(component.find(StatPod).length).toEqual(3);
  });
});
