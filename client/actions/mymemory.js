export const addMemoProyect = (enlightme) => {
  // console.log('this is set tipo color action')
  return(dispatch) => {
    dispatch({ type: 'SET_MEMO_PROYECT', enlightme});
  }
}

export const addMemoPaso = (enlightme) => {
  // console.log('this is set tipo color action')
  return(dispatch) => {
    dispatch({ type: 'SET_MEMO_PASO', enlightme});
  }
}
export const addMemory = (memoryState) => {
  console.log('hit me!')
  return(dispatch) => {
    dispatch({ type: 'ADD_MEMORY', memoryState })
  }
}

export const fetchMemory = () => {
  // return(dispatch) => {
    // dispatch({ type: 'ADD_MEMORY', doorStatus })
  // }
}
