const maxProcomId = ( state = [], action ) => {
  switch(action.type){
    case 'SET_MAX_PROCOM_ID':
      return action.last_id.procom;
      break;
    default:
      return state;
  }
}
export default maxProcomId;
