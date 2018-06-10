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
import mymemory from './mymemory';
import maxPasoId from './maxPaso';
import maxProcomId from './maxProcom';

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
  mymemory,
  maxPasoId,
  maxProcomId
});

export default rootReducer;
