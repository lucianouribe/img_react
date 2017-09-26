const descripcions = ( state = [], action ) => {
  let index;
  // console.log('reducer descripcions');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_DESCRIPCIONS':
      return action.descripcions;
      break;
    case 'FILTERED_DESCRIPCIONS':
      // console.log('filtered tarifas');
      let filteredDescripcions = action.lasDescripciones;
      return filteredDescripcions;
      break;
    case 'ADD_DESCRIPCION':
      return [action.descripcion, ...state]
      break;
    case 'EDIT_DESCRIPCION':
      console.log('here')
      let allDescripcions = state;
      console.log(allDescripcions)
      index = allDescripcions.findIndex( desc => desc.id === action.descripcion.id)
      console.log(action.descripcion)
      allDescripcions[index] = action.descripcion
      return [...allDescripcions]
      break;
    case 'DELETE_DESCRIPCION':
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

export default descripcions;
