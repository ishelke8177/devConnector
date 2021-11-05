import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

// it takes objects that have reducers we created
export default combineReducers({
  alert,
  profile,
  auth,
  post,
});
