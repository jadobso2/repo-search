import {
  REPO_FETCH_SUCCESS,
  REPO_READ_ME_FETCH_SUCCESS,
  REPO_RESET,
} from '../actions/index';

const initialState = {};

const repoReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case REPO_FETCH_SUCCESS:
      return payload;
    case REPO_READ_ME_FETCH_SUCCESS:
      return {
        readMe: payload,
        ...state,
      };
    case REPO_RESET:
      return initialState;
    default:
      return state;
  }
};

export default repoReducer;
