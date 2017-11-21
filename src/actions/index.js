import axios from 'axios';
import debounceAction from 'debounce-action';
import { decode } from 'base-64';

const API_ROOT = 'https://api.github.com';

export const REPOS_FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS';
export const REPOS_FETCH_ERROR = 'REPOS_FETCH_ERROR';
export const REPOS_RESET = 'REPOS_RESET';

export const REPO_FETCH = 'REPO_FETCH';
export const REPO_FETCH_SUCCESS = 'REPO_FETCH_SUCCESS';
export const REPO_FETCH_ERROR = 'REPO_FETCH_ERROR';
export const REPO_RESET = 'REPO_RESET';

export const REPO_READ_ME_FETCH_SUCCESS = 'REPO_READ_ME_FETCH_SUCCESS';
export const REPO_READ_ME_FETCH_ERROR = 'REPO_READ_ME_FETCH_ERROR';

export const SEARCH = 'SEARCH';

export const search = query => dispatch => {
  dispatch({
    type: SEARCH,
    payload: query,
  });

  if (query.length > 0) {
    return dispatch(debouncedFetchRepos(query));
  } else {
    return dispatch(resetRepos());
  }
};

export const fetchRepos = query => dispatch => {
  return axios.get(`${API_ROOT}/search/repositories?q=${query}`)
    .then(response => response.data)
    .then(payload => dispatch({
      type: REPOS_FETCH_SUCCESS,
      payload: payload.items,
    }))
    .catch(error => dispatch({
        type: REPOS_FETCH_ERROR,
        payload: error,
        error: true,
    }));
};

export const debouncedFetchRepos = debounceAction(fetchRepos, 500);

export const resetRepos = () => ({
  type: REPOS_RESET,
});

export const fetchRepo = ({ name, owner }) => dispatch => {
  dispatch({ type: REPO_FETCH });

  return axios.get(`${API_ROOT}/repos/${owner}/${name}`)
    .then(response => response.data)
    .then(payload => dispatch({
      type: REPO_FETCH_SUCCESS,
      payload,
    }))
    .catch(error => dispatch({
      type: REPO_FETCH_ERROR,
      payload: error,
      error: true,
    }));
};

export const resetRepo = () => ({
  type: REPO_RESET,
});

export const fetchRepoReadMe = ({ name, owner }) => dispatch => {
  return axios.get(`${API_ROOT}/repos/${owner}/${name}/readme`)
    .then(response => response.data)
    .then(payload => dispatch({
      type: REPO_READ_ME_FETCH_SUCCESS,
      payload: decode(payload.content),
    }))
    .catch(error => dispatch({
      type: REPO_READ_ME_FETCH_ERROR,
      payload: error,
      error: true,
    }));
};

export const fetchRepoAndReadMe = params => dispatch => {
  dispatch(fetchRepo(params));
  dispatch(fetchRepoReadMe(params));
};
