export const setColor = (farbe) => {
  // console.log('this is set tipo color action')
  return(dispatch) => {
    dispatch({ type: 'SET_COLOR', farbe});
  }
}
