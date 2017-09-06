export const selectedCarrusel = (seleccion) => {
  // console.log('this is set tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'SELECTED_CARRUSEL', seleccion});
  }
} 
