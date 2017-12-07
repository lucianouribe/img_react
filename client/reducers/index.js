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
import colorset from './colorset';
import proyectos from './proyectos';
import pasos from './pasos';

const rootReducer = combineReducers({
  routing: routerReducer ,
  user,
  idiomas,
  queVeo,
  carrusels,
  selectedCarrusel,
  transitoryInfo,
  reseter,
  descripcions,
  colorset,
  proyectos,
  pasos: proyectos
});

export default rootReducer;
