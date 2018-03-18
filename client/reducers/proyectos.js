const proyectos = ( state = [], action ) => {
  let index;

  switch(action.type){
    case 'ALL_PROYECTOS':
      return action.proyectos;
      break;
    case 'FILTERED_PROYECTOS':
      // console.log('this is FILTERED_PROYECTOS reducer');
      let filteredProyectos = action.losProyectos;
      return filteredProyectos;
      break;
    case 'ADD_PROYECTO':
      // console.log('this is ADD_PROYECTO reducer')
      return [action.proyecto, ...state]
      break;
    case 'EDIT_PROYECTO':
      // console.log('this is EDIT_PROYECTO reducer')
      let allProyectos = state;
      index = allProyectos.findIndex( proy => proy.id === action.proyecto.id)
      allProyectos[index] = action.proyecto
      return [...allProyectos]
      break;
    case 'DELETE_PROYECTO':
      // console.log('this is DELETE_PROYECTO reducer');
      index = state.findIndex( proy => proy.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default proyectos;
