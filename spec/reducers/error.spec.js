import reducer from '../../src/reducers/error';
import * as actions from '../../src/actions/index';

describe('error', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('handles REPOS_FETCH_ERROR action', () => {
    const action = { type: actions.REPOS_FETCH_ERROR };
    expect(reducer(false, action)).toEqual(true);
  });

  it('handles REPO_FETCH_ERROR action', () => {
    const action = { type: actions.REPO_FETCH_ERROR };
    expect(reducer(false, action)).toEqual(true);
  });
});
