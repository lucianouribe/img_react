export const fails = (fails) => {
  return(dispatch) => {
    dispatch({ type: 'FAILS', fails })
  }
}