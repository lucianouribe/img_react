export const letters = (letters) => {
  return(dispatch) => {
    dispatch({ type: 'LETTERS', letters })
  }
}
