export const setQueVeo = (info) => {
  console.log('this is set que veo action')
  return(dispatch) => {
    dispatch({ type: 'SET_QUE_VEO', info});
  }
}
