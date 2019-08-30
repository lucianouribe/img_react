const carrusels = ( state = [], action ) => {
  let index;
  // console.log('reducer carrusels');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_CARRUSELS':
      // console.log('all profesors');
      return action.profesors;
      break;
    // case 'FILTERED_PROFESORS':
    //   // console.log('filtered tarifas');
    //   let filteredProfesors = action.losProfesors;
    //   return filteredProfesors;
    //   break;
    case 'ADD_CARRUSEL':
      // console.log('reducer add carousel', action.carrusel, ...state)
      return [action.carrusel, ...state]
      break;
    case 'EDIT_CARRUSEL':
      // console.log('this is edit carrusel');
      // console.log(state, action);
      let allCarrusels = state;
      index = allCarrusels.findIndex( c => c.id === action.carrusel.id)
      allCarrusels[index] = action.carrusel
      return [...allCarrusels]
      break;
    case 'DELETE_CARRUSEL':
      index = state.findIndex( c => c.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default carrusels;
