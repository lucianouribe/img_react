export const setQueVeo = (info) => {
  // console.log('this is set tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'SET_QUE_VEO', info});
  }
} 
