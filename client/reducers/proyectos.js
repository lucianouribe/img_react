const proyectos = ( state = [], action ) => {
  let index;
  let indexTwo;
  // console.log('reducer proyectos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_PROYECTOS':
      // console.log('all proyectos');
      // console.log(action.proyectos);
      return action.proyectos;
      break;
    case 'FILTERED_PROYECTOS':
      // console.log('filtered proyectos');
      let filteredProyectos = action.losProyectos;
      return filteredProyectos;
      break;
    case 'ADD_PROYECTO':
      return [action.proyecto, ...state]
      break;
    case 'EDIT_PROYECTO':
      console.log('edit proyecto')
      // console.table(action, state)
      let allProyectos = state;
      // console.log(allProyectos)
      index = allProyectos.findIndex( proy => proy.id === action.proyecto.id)
      console.log(action.proyecto)
      allProyectos[index] = action.proyecto
      return [...allProyectos]
      break;
    case 'DELETE_PROYECTO':
      index = state.findIndex( proy => proy.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    case 'ADD_PASO':
      // debugger;
      return [action.proyecto.pasos, ...state]
      break;
    case 'DELETE_PASO':
      console.log('this is delete paso');
      // console.log(state);
      // console.log(action);
      index = state.findIndex( proy => proy.id === action.proId)
      // debugger;
      indexTwo = state[index].pasos.findIndex( paso => paso.id === action.pasId)
      // debugger;
      return [
        ...state[index].pasos.slice(0, indexTwo),
        ...state[index].pasos.slice(indexTwo + 1)
      ]
      break;

    default:
      return state;
  }
}

export default proyectos;
