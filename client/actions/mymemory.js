export const addMemory = (memoryState) => {
  // console.log('addMemory actions!')
  let whoAmI;
  if(memoryState.what === 'proyecto') {
    whoAmI = {
      id: memoryState.proId,
      state: {
        show: memoryState.show
      }
    }
  } else {
    whoAmI = {
      proyectoId: memoryState.proId,
      id: memoryState.pasId,
      state: {
        showProcom: memoryState.show,
        typeOfProcom: memoryState.how
      }
    }
  }

  return(dispatch) => {
    dispatch({ type: 'ADD_MEMORY', whoAmI })
  }
}
