import {
  SEARCH,
  REPOS_FETCH_SUCCESS,
  REPOS_RESET,
  REPO_FETCH,
  REPO_FETCH_SUCCESS,
} from '../actions/index';

const initialState = false;

const loadingReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SEARCH:
    case REPO_FETCH:
      return true;
    case REPOS_FETCH_SUCCESS:
    case REPOS_RESET:
    case REPO_FETCH_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default loadingReducer;
