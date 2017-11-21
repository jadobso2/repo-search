import reducer from '../../src/reducers/repo';
import * as actions from '../../src/actions/index';

describe('repo', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('handles REPO_FETCH_SUCCESS action', () => {
    const action = {
      type: actions.REPO_FETCH_SUCCESS,
      payload: { lorem: 'ipsum' },
    };
    expect(reducer({}, action)).toEqual({ lorem: 'ipsum' });
  });

  it('handles REPO_READ_ME_FETCH_SUCCESS action', () => {
    const action = {
      type: actions.REPO_READ_ME_FETCH_SUCCESS,
      payload: 'lorem',
    };
    expect(reducer({}, action)).toEqual({ readMe: 'lorem' });
  });

  it('handles REPO_RESET action', () => {
    const action = { type: actions.REPO_RESET };
    expect(reducer({ lorem: 'ipsum' }, action)).toEqual({});
  });
});
