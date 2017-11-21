import reducer from '../../src/reducers/query';
import * as actions from '../../src/actions/index';

describe('query', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('handles SEARCH action', () => {
    const action = {
      type: actions.SEARCH,
      payload: 'query',
    };
    expect(reducer('', action)).toEqual('query');
  });
});
