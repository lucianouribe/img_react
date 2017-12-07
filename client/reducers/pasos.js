const pasos = ( state = [], action ) => {
  let index;
  console.log('reducer pasos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_PASOS':
      console.log('all pasos')
      return action.pasos;
      break;
    case 'ADD_PASO':
      console.log('add paso')
      return [action.paso, ...state]
      break;
    case 'EDIT_PASO':
      console.log('edit paso')
      let allProyectos = state;
      console.log(allProyectos)
      index = allProyectos.findIndex( desc => desc.id === action.paso.id)
      console.log(action.paso)
      allProyectos[index] = action.paso
      return [...allProyectos]
      break;
    case 'DELETE_PASO':
      console.log('this is delete paso');
      console.log(state);
      console.log(action);
      debugger;
      index = state.findIndex( desc => desc.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default pasos;
