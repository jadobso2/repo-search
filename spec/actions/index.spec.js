import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import debounceAction from 'debounce-action';
import Base64 from 'base-64';

jest.mock('base-64', () => ({
  decode: string => string,
}));

jest.mock('debounce-action', () => func => func);

const actions = require('../../src/actions/index');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('search', () => {
    it('creates actions', () => {
      const store = mockStore({
        repos: [],
        query: '',
      });
      const expectedActions = [
        {
          type: actions.SEARCH,
          payload: 'query',
        },
        {
          type: actions.REPOS_FETCH_SUCCESS,
          payload: [{ id: 'ipsum' }],
        },
      ];

      moxios.stubRequest('https://api.github.com/search/repositories?q=query', {
        status: 200,
        response: {
          items: [{ id: 'ipsum' }],
        },
      });

      store.dispatch(actions.search('query')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('query length = 0', () => {
      it('creates actions', () => {
        const store = mockStore({
          repos: [],
          query: '',
        });
        const expectedActions = [
          {
            type: actions.SEARCH,
            payload: '',
          },
          { type: actions.REPOS_RESET },
        ];

        store.dispatch(actions.search(''));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetch repos', () => {
    it('creates actions', () => {
      const store = mockStore({ repos: [] });
      const expectedActions = [{
        type: actions.REPOS_FETCH_SUCCESS,
        payload: [{ id: 'ipsum' }],
      }];

      moxios.stubRequest('https://api.github.com/search/repositories?q=query', {
        status: 200,
        response: {
          items: [{ id: 'ipsum' }],
        },
      });
      store.dispatch(actions.fetchRepos('query')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('error', () => {
      it('creates actions', () => {
        const store = mockStore({ repos: [] });
        const expectedActions = [{ type: actions.REPOS_FETCH_ERROR }];

        moxios.stubRequest('https://api.github.com/search/repositories?q=query', {
          status: 400,
        });
        store.dispatch(actions.fetchRepos('query')).catch(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });

  it('creates an action to reset repos', () => {
    const action = { type: actions.REPOS_RESET };
    expect(actions.resetRepos()).toEqual(action);
  });

  describe('fetch repo', () => {
    const params = {
      owner: 'lorem',
      name: 'ipsum',
    };

    it('creates actions', () => {
      const store = mockStore({ repo: {} });
      const expectedActions = [
        { type: actions.REPO_FETCH },
        {
          type: actions.REPO_FETCH_SUCCESS,
          payload: { id: 'ipsum' },
        },
      ];

      moxios.stubRequest('https://api.github.com/repos/lorem/ipsum', {
        status: 200,
        response: { id: 'ipsum' },
      });
      store.dispatch(actions.fetchRepo(params)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('error', () => {
      it('creates actions', () => {
        const store = mockStore({ repo: {} });
        const expectedActions = [
          { type: actions.REPO_FETCH },
          { type: actions.REPO_FETCH_ERROR },
        ];

        moxios.stubRequest('https://api.github.com/repos/lorem/ipsum', {
          status: 400,
        });
        store.dispatch(actions.fetchRepo(params)).catch(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });

  it('creates an action to reset repo', () => {
    const action = { type: actions.REPO_RESET };
    expect(actions.resetRepo()).toEqual(action);
  });

  describe('fetch repo read me', () => {
    const params = {
      owner: 'lorem',
      name: 'ipsum',
    };

    it('creates actions', () => {
      const store = mockStore({ repo: {} });
      const expectedActions = [{
        type: actions.REPO_READ_ME_FETCH_SUCCESS,
        payload: 'ipsum',
      }];

      moxios.stubRequest('https://api.github.com/repos/lorem/ipsum/readme', {
        status: 200,
        response: { content: 'ipsum' },
      });
      store.dispatch(actions.fetchRepoReadMe(params)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('error', () => {
      it('creates actions', () => {
        const store = mockStore({ repo: {} });
        const expectedActions = [{ type: actions.REPO_READ_ME_FETCH_ERROR }];

        moxios.stubRequest('https://api.github.com/repos/lorem/ipsum/readme', {
          status: 400,
        });
        store.dispatch(actions.fetchRepo(params)).catch(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
