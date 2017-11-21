import { combineReducers } from 'redux';
import error from './error';
import loading from './loading';
import repos from './repos';
import repo from './repo';
import query from './query';

const rootReducer = combineReducers({
  error,
  loading,
  repos,
  repo,
  query,
})

export default rootReducer;
