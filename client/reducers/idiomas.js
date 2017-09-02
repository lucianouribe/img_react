const idiomas = ( state = 'ingles', action ) => {

  switch(action.type){
    case 'SET_IDIOMA':
      console.log('set idioma reducer')
      console.log(action.idioma)
      return action.idioma;
      break;
    default:
      return state;
  }
}
export default idiomas;
