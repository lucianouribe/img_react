export const reseter = (info) => {
  // console.log('this is set tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'RESET', info});
  }
} 
