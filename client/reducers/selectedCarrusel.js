const selectedCarrusel = ( state = 'intro', action ) => {

  switch(action.type){
    case 'SELECTED_CARRUSEL':
      // console.log('set selected carrusel reducer')
      // console.log(action.seleccion)
      return action.seleccion;
      break;
    default:
      return state;
  }
}
export default selectedCarrusel;
