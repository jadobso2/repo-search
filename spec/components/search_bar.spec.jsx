import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../../src/components/search_bar';

const search = jest.fn();
const props = {
  search,
  query: 'lorem',
};

describe('SearchBar', () => {
  describe('form', () => {
    describe('on submit', () => {
      it('prevents default', () => {
        const component = shallow(<SearchBar { ...props } />);
        const preventDefault = jest.fn();
        component.simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
      });
    });
  });

  describe('input', () => {
    it('renders an input with value of query', () => {
      const component = shallow(<SearchBar { ...props } />);
      expect(component.find('input').prop('value')).toEqual('lorem');
    });

    describe('on change', () => {
      it('calls search with updated input value', () => {
        const component = shallow(<SearchBar { ...props } />);
        const input = component.find('input');
        input.simulate('change', { target: { value: 'ipsum' }});
        expect(search).toBeCalledWith('ipsum');
      });
    });
  });
});
