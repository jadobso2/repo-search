import {
  REPOS_FETCH_ERROR,
  REPO_FETCH_ERROR,
} from '../actions/index';

const initialState = false;

const errorReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case REPOS_FETCH_ERROR:
    case REPO_FETCH_ERROR:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
