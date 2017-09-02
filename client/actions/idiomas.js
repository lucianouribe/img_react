export const setIdioma = (idioma) => {
  // console.log('this is set tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'SET_IDIOMA', idioma});
  }
} 
