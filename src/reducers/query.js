import { SEARCH } from '../actions/index';

const initialState = '';

const searchReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SEARCH:
      return payload;
    default:
      return state;
  }
};

export default searchReducer;
