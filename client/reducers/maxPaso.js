const maxPasoId = ( state = [], action ) => {
  switch(action.type){
    case 'SET_MAX_PASO_ID':
      return action.last_id.paso;
      break;
    default:
      return state;
  }
}
export default maxPasoId;
