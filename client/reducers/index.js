import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import idiomas from './idiomas';
import queVeo from './queVeo';

const rootReducer = combineReducers({
  routing: routerReducer ,
  user,
  idiomas,
  queVeo
});

export default rootReducer;
