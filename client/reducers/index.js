import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import idiomas from './idiomas';
import queVeo from './queVeo';
import carrusels from './carrusels';
import selectedCarrusel from './selectedCarrusel';
import transitoryInfo from './transitoryInfo';
import reseter from './reseter';
import descripcions from './descripcions';

const rootReducer = combineReducers({
  routing: routerReducer ,
  user,
  idiomas,
  queVeo,
  carrusels,
  selectedCarrusel,
  transitoryInfo,
  reseter,
  descripcions
});

export default rootReducer;
