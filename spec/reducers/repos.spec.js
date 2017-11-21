import reducer from '../../src/reducers/repos';
import * as actions from '../../src/actions/index';

describe('repos', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('handles REPOS_FETCH_SUCCESS action', () => {
    const action = {
      type: actions.REPOS_FETCH_SUCCESS,
      payload: [{ lorem: 'ipsum' }],
    };
    expect(reducer([], action)).toEqual([{ lorem: 'ipsum' }]);
  });

  it('handles REPOS_RESET action', () => {
    const action = { type: actions.REPOS_RESET };
    expect(reducer([{ lorem: 'ipsum' }], action)).toEqual([]);
  });
});
