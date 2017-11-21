import {
  REPOS_FETCH_SUCCESS,
  REPOS_RESET,
} from '../actions/index';

const initialState = [];

const reposReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case REPOS_FETCH_SUCCESS:
      return payload;
    case REPOS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reposReducer;
