import React from 'react';
import { StaticRouter } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';
import { mount, render, shallow } from 'enzyme';

import Result from '../../src/components/result';
import StatPod from '../../src/components/stat_pod';

const fetchRepoAndReadMe = jest.fn();
const resetRepo = jest.fn();
const props = additionalProps => ({
  error: false,
  fetchRepoAndReadMe,
  loading: false,
  params: {
    owner: 'Lorem',
    name: 'Ipsum',
  },
  repo: {
    description: 'lorem ipsum',
    forks_count: 15,
    name: 'Ipsum',
    open_issues_count: 15,
    readMe: 'Lorem ipsum dolor',
    watchers_count: 15,
  },
  resetRepo,
  ...additionalProps,
});

describe('Result', () => {
  it('calls fetch repo and read me', () => {
    const component = shallow(<Result { ...props() } />);
    expect(fetchRepoAndReadMe).toBeCalledWith({
      owner: 'Lorem',
      name: 'Ipsum',
    });
  });

  it('calls reset repo on unmount', () => {
    const component = mount(
      <StaticRouter context={ {} }>
        <Result { ...props() } />
      </StaticRouter>
    );
    component.unmount();
    expect(resetRepo).toBeCalled();
  });

  it('renders a title from repo name', () => {
    const component = shallow(<Result { ...props() } />);
    expect(component.find('.result__title').text()).toEqual('Ipsum');
  });

  it('renders a description from repo description', () => {
    const component = shallow(<Result { ...props() } />);
    expect(component.find('.result__description').text()).toEqual('lorem ipsum');
  });

  it('renders stat pods', () => {
    const component = shallow(<Result { ...props() } />);
    expect(component.find(StatPod).map(pod => pod.props())).toEqual([
      { count: 15, children: 'Forks' },
      { count: 15, children: 'Watchers' },
      { count: 15, children: 'Open Issues' },
    ]);
  });

  it('renders a markdown rendered read me', () => {
    const component = shallow(<Result { ...props() } />);
    expect(component.find(MarkdownRenderer).prop('markdown'))
      .toEqual('Lorem ipsum dolor');
  });

  it('renders a link to /', () => {
    const component = render(
      <StaticRouter context={ {} }>
        <Result { ...props() } />
      </StaticRouter>
    );
    expect(component.find('a.button').prop('href')).toEqual('/');
  });

  describe('when loading', () => {
    it('renders a loading notice', () => {
      const component = mount(
        <StaticRouter context={ {} }>
          <Result { ...props({ loading: true }) } />
        </StaticRouter>
      );
      expect(component.find('.notice').text()).toEqual('Loading...');
    });
  });

  describe('when error', () => {
    it('renders an error notice', () => {
      const component = mount(
        <StaticRouter context={ {} }>
          <Result { ...props({ error: true }) } />
        </StaticRouter>
      );
      expect(component.find('.notice').text())
        .toEqual('Something wen\'t wrong, try searching again.');
    });
  });
});
