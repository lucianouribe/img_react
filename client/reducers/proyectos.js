const proyectos = ( state = [], action ) => {
  let index;
  let indexTwo;
  let indexThree;
  let allProyectos;

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
    // case 'ADD_PASO':
    //   // console.log('this is ADD_PASO reducer en proyectos')
    //   allProyectos = state;
    //   index = allProyectos.findIndex( proy => proy.id === action.proId)
    //
    //   return [action.paso, ...state[index].pasos]
    //   break;
    case 'ADD_PROCOM':
      // console.log('this is ADD_PROCOM reducer')
      allProyectos = state;
      index = allProyectos.findIndex( proy => proy.id === action.proId)
      indexTwo = allProyectos[index].pasos.findIndex( paso => paso.id === action.pasId)
      return [action.procom, ...state[index].pasos[indexTwo]]
      break;
    case 'EDIT_PROYECTO':
      // console.log('this is EDIT_PROYECTO reducer')
      allProyectos = state;
      // debugger;
      index = allProyectos.findIndex( proy => proy.id === action.proyecto.id)
      allProyectos[index] = action.proyecto
      // debugger;
      return [...allProyectos]
      break;
    // case 'EDIT_PASO':
    //   // console.log('this is edit paso reducer !')
    //   allProyectos = state;
    //   index = allProyectos.findIndex( proy => proy.id === action.proId)
    //   indexTwo = allProyectos[index].pasos.findIndex( paso => paso.id === action.pasId)
    //
    //   allProyectos[index].pasos[indexTwo] = action.paso
    //
    //   return [...allProyectos[index].pasos]
    //   break;
    case 'EDIT_PROCOM':
      // console.log('this is edit procom reducer !')
      allProyectos = state;

      index = allProyectos.findIndex( proy => proy.id === action.proId)
      indexTwo = allProyectos[index].pasos.findIndex( paso => paso.id === action.pasId)

      indexThree = allProyectos[index].pasos[indexTwo].procoms.findIndex( procom => procom.id === action.procomId)

      allProyectos[index].pasos[indexTwo].procoms[indexThree] = action.procom

      return [...allProyectos[index].pasos[indexTwo].procoms]
      break;
    case 'DELETE_PROYECTO':
      // console.log('this is delete proyecto');
      index = state.findIndex( proy => proy.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    case 'DELETE_PASO':
      // console.log('this is delete paso');
      index = state.findIndex( proy => proy.id === action.proId)
      indexTwo = state[index].pasos.findIndex( paso => paso.id === action.pasId)
      return [
        ...state[index].pasos.slice(0, indexTwo),
        ...state[index].pasos.slice(indexTwo + 1)
      ]
      break;
    case 'DELETE_PROCOM':
      // console.log('this is delete procom');
      index = state.findIndex( proy => proy.id === action.proyectoId)
      indexTwo = state[index].pasos.findIndex( paso => paso.id === action.pasoId)
      indexThree = state[index].pasos[indexTwo].procoms.findIndex( procom => procom.id === action.procomId)
      return [
        ...state[index].pasos[indexTwo].procoms.slice(0, indexThree),
        ...state[index].pasos[indexTwo].procoms.slice(indexThree + 1)
      ]
      break;

    default:
      return state;
  }
}

export default proyectos;
