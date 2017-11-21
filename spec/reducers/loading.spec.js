import reducer from '../../src/reducers/loading';
import * as actions from '../../src/actions/index';

describe('loading', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('handles SEARCH action', () => {
    const action = { type: actions.SEARCH };
    expect(reducer(false, action)).toEqual(true);
  });

  it('handles REPO_FETCH action', () => {
    const action = { type: actions.REPO_FETCH };
    expect(reducer(false, action)).toEqual(true);
  });

  it('handles REPOS_FETCH_SUCCESS action', () => {
    const action = { type: actions.REPOS_FETCH_SUCCESS };
    expect(reducer(true, action)).toEqual(false);
  });

  it('handles REPOS_RESET action', () => {
    const action = { type: actions.REPOS_RESET };
    expect(reducer(true, action)).toEqual(false);
  });

  it('handles REPO_FETCH_SUCCESS action', () => {
    const action = { type: actions.REPO_FETCH_SUCCESS };
    expect(reducer(true, action)).toEqual(false);
  });
});
