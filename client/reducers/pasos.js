// const pasos = ( state = [], action ) => {
//   let index;
//   let indexTwo;
//   let indexThree;
//   let allProyectos;
//
//   switch(action.type){
//     case 'ADD_PASO':
//       console.log('this is add paso reducer')
//       allProyectos = state;
//       debugger;
//       index = allProyectos.findIndex( proy => proy.id === action.proId)
//       // let allPasos = [action.paso, ...allProyectos[index].pasos]
//       allProyectos[index].pasos = [action.paso, ...allProyectos[index].pasos]
//       // debugger;
//       // return [allPasos, ...allProyectos[index].pasos]
//       // return [action.paso, ...state[index].pasos]
//       // let testing =  allProyectos[index].pasos
//       debugger;
//       return [action.paso, ...allProyectos[index].pasos]
//       break;
//     case 'EDIT_PASO':
//       // console.log('this is edit paso reducer !')
//       allProyectos = state;
//       index = allProyectos.findIndex( proy => proy.id === action.proId)
//       indexTwo = allProyectos[index].pasos.findIndex( paso => paso.id === action.pasId)
//
//       allProyectos[index].pasos[indexTwo] = action.paso
//
//       return [...allProyectos[index].pasos]
//       break;
//     case 'DELETE_PASO':
//       // console.log('this is delete paso');
//       index = state.findIndex( proy => proy.id === action.proId)
//       indexTwo = state[index].pasos.findIndex( paso => paso.id === action.pasId)
//       return [
//         ...state[index].pasos.slice(0, indexTwo),
//         ...state[index].pasos.slice(indexTwo + 1)
//       ]
//       break;
//     default:
//       return state;
//   }
// }
//
// export default pasos;
